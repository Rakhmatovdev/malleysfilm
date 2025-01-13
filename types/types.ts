import Image from 'next/image';

   

export type Tabout = {
    id:string
    text: string;
    title: string;
    facebook: string;
    twitter: string;
    instagram: string;
    address: string;
    phone: string;
    email: string;
    image: string;
    telegram: string;

}

export type Tblog = {
    id:string
    name: string
    date: string | Date
    text: string
    image:string
};


type Image = {
    gallery: string | number;
    id: string | number;
    image: string;
}

export type Tgallerie = {
    id:string
    title: string;
    images: Image[];
    text: string;

};

export type Tmessage = {
    full_name: string;
    email: string;
    website: string;
    message: string;
};

export type Tportfolio = {
    title: string;
    author: string;
   text: string;
    id: number | string;
    video_url: string;
 
};

export type Tfooter= {
    id:string
    name: string;
    path: string;
};
export type Treviews= {
id: string;
author: string;
image: string;
position: string;
rating: number;
text: string;
};
 export type Tservices={
    id: string;
    author: string;
    image: string;
    text: string;
    title: string;
 }
export type Tteams = {
    id: string;
    name: string;
    image: string;
    position: string;
};
export type Tprojects = {
    id: string;
    name: string;
    text: string;
    video_url: string;
};
export type Tcontacts = {
    name: string
    email: string 
    phone: string | number 
    message: string

};
export type Temails = {
    email: string 
};
