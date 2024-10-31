import Service1 from "../public/Service1.png";
import Service2 from "../public/Service2.png";
import Service3 from "../public/Service3.png";
import Service4 from "../public/Service4.png";
import Blog1 from "../public/images/Blog1.png"
import Blog2 from "../public/images/Blog2.png"
import Blog3 from "../public/images/Blog3.png"
import Blog4 from "../public/images/Blog4.png"
import Project1 from "../public/images/Project1.png"
import Project2 from "../public/images/Project2.png"
import Project3 from "../public/images/Project3.png"
import Project4 from "../public/images/Project4.png"
import Project5 from "../public/images/Project5.png"
import About1 from "../public/images/Aproject1.png"
import About2 from "../public/images/Aproject2.png"
import About3 from "../public/images/Aproject3.png"
import Team1 from "../public/images/Director1.png"
import Team2 from "../public/images/Director2.png"
import Team3 from "../public/images/Director3.png"
import Team4 from "../public/images/Director4.png"
import Team5 from "../public/images/Director5.png"
import Team6 from "../public/images/Director6.png"
import Enginer1 from "../public/images/Enginer1.png";
import Enginer2 from "../public/images/Enginer2.png";
import Enginer3 from "../public/images/Enginer3.png";
import User1 from "../public/images/User1.png"
import User2 from "../public/images/User7.png"
import User3 from "../public/images/User3.png"
import User4 from "../public/images/User7.png"
import User5 from "../public/images/User1.png"
import User6 from "../public/images/User3.png"
import User7 from "../public/images/User7.png"
import User8 from "../public/images/User1.png"
import User9 from "../public/images/User3.png"
import User10 from "../public/images/User1.png"
import User11 from "../public/images/User7.png"
import User12 from "../public/images/User3.png"
import User13 from "../public/images/User1.png"
import User14 from "../public/images/User7.png"

 const  ServicesFooter=[
    {id:"1",path:"/",title:"Email marketing"},
    {id:"2",path:"/",title:"Campaigns"},
    {id:"3",path:"/",title:"Branding"},
    {id:"4",path:"/",title:"Offline"},
]

 const AboutFooter=[
    {id:"5",path:"/",title:"Our Story"},
    {id:"6",path:"/",title:"Benefits"},
    {id:"7",path:"/",title:"Team"},
    {id:"8",path:"/",title:"Careers"},
]

 const HelpsFooter = [
    {id:"9",path:"/",title:"FAQs"},
    {id:"10",path:"/",title:"Contact Us"},
]

  const Services = [
    {
      id: 1,
      image: Service1.src,
      name: "Service 1",
      title: "Hernan Almar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt i officia deserunt mollit anim id est laborum.",
    },
    {
      id: 2,
      image: Service2.src,
      name: "Service 2",
      title: "Hernan Almar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt i officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      image: Service3.src,
      name: "Service 3",
      title: "Hernan Almar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt i officia deserunt mollit anim id est laborum.",
    },
    {
      id: 4,
      image: Service4.src,
      name: "Service 4",
      title: "Hernan Almar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt i officia deserunt mollit anim id est laborum.",
    },
  ];

  const NavLinks = [
    { title: "Home", path: "/" },
    { title: "Portfolio", path: "/pages/portfolio" },
    { title: "Services", path: "/pages/services" },
    { title: "About", path: "/pages/about" },
    { title: "Contact", path: "/pages/contact" },
    { title: "Blog", path: "/pages/blog" },
  ];
   
const BlogData=[
  {id:1,image:Blog1.src,createdAt:"Sunday , 1 Jan 2023",title:"Bill Walsh leadership lessons",description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",skils:["Leadership","Management","Presentation"]},
  {id:2,image:Blog2.src,createdAt:"Sunday , 1 Jan 2023",title:"Bill Walsh leadership lessons",description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",skils:["Leadership","Management","Presentation"]},
  {id:3,image:Blog3.src,createdAt:"Sunday , 1 Jan 2023",title:"Bill Walsh leadership lessons",description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",skils:["Leadership","Management","Presentation"]},
  {id:4,image:Blog4.src,createdAt:"Sunday , 1 Jan 2023",title:"Bill Walsh leadership lessons",description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",skils:["Leadership","Management","Presentation"]},
  {id:5,image:Blog1.src,createdAt:"Sunday , 1 Jan 2023",title:"Bill Walsh leadership lessons",description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",skils:["Leadership","Management","Presentation"]},
  {id:6,image:Blog2.src,createdAt:"Sunday , 1 Jan 2023",title:"Bill Walsh leadership lessons",description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",skils:["Leadership","Management","Presentation"]},
  {id:7,image:Blog3.src,createdAt:"Sunday , 1 Jan 2023",title:"Bill Walsh leadership lessons",description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",skils:["Leadership","Management","Presentation"]},
  {id:8,image:Blog4.src,createdAt:"Sunday , 1 Jan 2023",title:"Bill Walsh leadership lessons",description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",skils:["Leadership","Management","Presentation"]},
]

const Ours=[
  {id:1,count:150,name:"Clients"},
  {id:2,count:300,name:"Projects"},
  {id:3,count:500,name:"Vistor"},

]

const Bproject=[
  {id:1,image:Project1.src,name:"We Create Excellence"},
  {id:2,image:Project2.src,name:"We Create Excellence"},
  {id:3,image:Project3.src,name:"We Create Excellence"},
  {id:4,image:Project4.src,name:"We Create Excellence"},
  {id:5,image:Project5.src,name:"We Create Excellence"},
]

const AboutUsData=[
  {id:1,image:About1.src,title:"Brahma",name:"Hernan Almar"},
  {id:2,image:About2.src,title:"Brahma",name:"Hernan Almar"},
  {id:3,image:About3.src,title:"Brahma",name:"Hernan Almar"},
]

const OurTeam=[
  {id:1,image:Team1.src,name:"Kevin Williams",profession:"President"},
  {id:2,image:Team2.src,name:"Alyssa Heisten",profession:"CEO"},
  {id:3,image:Team3.src,name:"Carlos Zaldivar",profession:"VP, strategy & Creative services "},
  {id:4,image:Team4.src,name:"Sinead Harte",profession:"Director"},
  {id:5,image:Team5.src,name:"Sinead Jarte",profession:"Director"},
  {id:6,image:Team6.src,name:"Sinerd Narte",profession:"Director"},

]


const Enginers=[
  {id:1,image:Enginer1.src,rating:5,desc:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",name:"Elisa Grant",profession:'Legacy Solutions Engineer'},
  {id:2,image:Enginer2.src,rating:5,desc:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",name:"Elrico Gran",profession:'Legacy Solutions Engineer'},
  {id:3,image:Enginer3.src,rating:5,desc:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",name:"Nastya Gora",profession:'Legacy Solutions Engineer'},
]

const Users=[
  {id:1,image:User1.src,name:"User1"},
  {id:2,image:User2.src,name:"User2"},
  {id:3,image:User3.src,name:"User3"},
  {id:4,image:User4.src,name:"User4"},
  {id:5,image:User5.src,name:"User5"},
  {id:6,image:User6.src,name:"User6"},
  {id:7,image:User7.src,name:"User7"},
  {id:8,image:User8.src,name:"User8"},
  {id:9,image:User9.src,name:"User9"},
  {id:10,image:User10.src,name:"User10"},
  {id:11,image:User11.src,name:"User11"},
  {id:13,image:User12.src,name:"User12"},
  {id:14,image:User13.src,name:"User13"},
  {id:15,image:User14.src,name:"User14"}
]

  export  {NavLinks,ServicesFooter,AboutFooter,HelpsFooter,Services,BlogData,Ours,Bproject,AboutUsData,OurTeam,Enginers,Users}