import { Tabout, Tblog, Tfooter, Tgallerie, Tmessage, Tportfolio, Treviews, Tservices } from "@/types/types";
import apiClient, { endpoints } from "./restApi";

export const restService = {

    // About
    about: async ()=> {
        try {
            const response = await apiClient.get<Tabout[]>(endpoints.about.get);
            return response.data;
        } catch (error) {
            console.error("About failed", error);
            throw new Error("About failed. Please check your credentials and try again.");
        }
    },

    aboutOne: async ({id}:{id:string|number})=> {
        try {
            const response = await apiClient.get(`endpoints.about.get${id}/`);
            return response.data;
        } catch (error) {
            console.error("About one failed", error);
            throw new Error("About one failed. Please check your credentials and try again.");
        }
    },

    aboutPost: async ({data,id}:{data:Tabout,id:string|number})=> {
        try {
            const response = await apiClient.post(`endpoints.about.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("About Post failed", error);
            throw new Error("About Post failed. Please check your credentials and try again.");
        }
    },

    aboutPatch: async ({data,id}:{data:Tabout,id:string|number})=> {
        try {
            const response = await apiClient.patch(`endpoints.about.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("About Post failed", error);
            throw new Error("About Post failed. Please check your credentials and try again.");
        }
    },

    aboutPut: async ({data,id}:{data:Tabout,id:string|number})=> {
        try {
            const response = await apiClient.put(`endpoints.about.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("About Put failed", error);
            throw new Error("About Put failed. Please check your credentials and try again.");
        }
    },

    aboutDelete: async ({id}:{id:string|number})=> {
        try {
            const response = await apiClient.delete(`endpoints.about.get${id}/`,);
            return response.data;
        } catch (error) {
            console.error("About Delete failed", error);
            throw new Error("About Delete failed. Please check your credentials and try again.");
        }
    },



    // Blogs

    blogs: async ()=> {
        try {
            const response = await apiClient.get(endpoints.blogs.get);
            return response.data;
        } catch (error) {
            console.error("Blogs failed", error);
            throw new Error("Blogs failed. Please check your credentials and try again.");
        }
    },

    blogOne: async ({id}:{id:string|number})=> {
        try {
            const response = await apiClient.get(`endpoints.blogs.get${id}/`);
            return response.data;
        } catch (error) {
            console.error("Blog one failed", error);
            throw new Error("Blog one failed. Please check your credentials and try again.");
        }
    },

    blogPost: async ({data,id}:{data:Tblog,id:string|number})=> {
        try {
            const response = await apiClient.post(`endpoints.blogs.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Blog Post failed", error);
            throw new Error("Blog Post failed. Please check your credentials and try again.");
        }
    },

    blogPatch: async ({data,id}:{data:Tblog,id:string|number})=> {
        try {
            const response = await apiClient.patch(`endpoints.blogs.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Blog Post failed", error);
            throw new Error("Blog Post failed. Please check your credentials and try again.");
        }
    },

    blogPut: async ({data,id}:{data:Tblog,id:string|number})=> {
        try {
            const response = await apiClient.put(`endpoints.blogs.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Blog Put failed", error);
            throw new Error("Blog Put failed. Please check your credentials and try again.");
        }
    },

    blogDelete: async ({id}:{id:string|number})=> {
        try {
            const response = await apiClient.delete(`endpoints.blogs.get${id}/`,);
            return response.data;
        } catch (error) {
            console.error("Blog Delete failed", error);
            throw new Error("Blog Delete failed. Please check your credentials and try again.");
        }
    },


    //Galleries

    galleries: async ()=> {
        try {
            const response = await apiClient.get<Tgallerie[]>(endpoints.galleries.get);
            return response.data;
        } catch (error) {
            console.error("Galleries failed", error);
            throw new Error("Galleries failed. Please check your credentials and try again.");
        }
    },
    
    gallerieOne: async ({id}:{id:string|number})=> {
        try {
            const response = await apiClient.get(`endpoints.galleries.get${id}/`);
            return response.data;
        } catch (error) {
            console.error("Gallerie one failed", error);
            throw new Error("Gallerie one failed. Please check your credentials and try again.");
        }
    },

    galleriePost: async ({data,id}:{data:Tgallerie,id:string|number})=> {
        try {
            const response = await apiClient.post(`endpoints.galleries.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Gallerie Post failed", error);
            throw new Error("Gallerie Post failed. Please check your credentials and try again.");
        }
    },

    galleriePatch: async ({data,id}:{data:Tgallerie,id:string|number})=> {
        try {
            const response = await apiClient.patch(`endpoints.galleries.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Gallerie Post failed", error);
            throw new Error("Gallerie Post failed. Please check your credentials and try again.");
        }
    },

    galleriePut: async ({data,id}:{data:Tgallerie,id:string|number})=> {
        try {
            const response = await apiClient.put(`endpoints.galleries.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Gallerie Put failed", error);
            throw new Error("Gallerie Put failed. Please check your credentials and try again.");
        }
    },

    gallerieDelete: async ({id}:{id:string|number})=> {
        try {
            const response = await apiClient.delete(`endpoints.galleries.get${id}/`,);
            return response.data;
        } catch (error) {
            console.error("Gallerie Delete failed", error);
            throw new Error("Gallerie Delete failed. Please check your credentials and try again.");
        }
    },


    //Messages

    messages: async ()=> {
        try {
            const response = await apiClient.get(endpoints.messages.get);
            return response.data;
        } catch (error) {
            console.error("Messages failed", error);
            throw new Error("Messages failed. Please check your credentials and try again.");
        }
    },

    messageOne: async ({id}:{id:string|number})=> {
        try {
            const response = await apiClient.get(`endpoints.messages.get${id}/`);
            return response.data;
        } catch (error) {
            console.error("Messages one failed", error);
            throw new Error("Messages one failed. Please check your credentials and try again.");
        }
    },

    messagePost: async ({data,id}:{data:Tmessage,id:string|number})=> {
        try {
            const response = await apiClient.post(`endpoints.messages.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Messages Post failed", error);
            throw new Error("Messages Post failed. Please check your credentials and try again.");
        }
    },

    messagePatch: async ({data,id}:{data:Tmessage,id:string|number})=> {
        try {
            const response = await apiClient.patch(`endpoints.messages.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Messages Post failed", error);
            throw new Error("Messages Post failed. Please check your credentials and try again.");
        }
    },

    messagePut: async ({data,id}:{data:Tmessage,id:string|number})=> {
        try {
            const response = await apiClient.put(`endpoints.messages.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Messages Put failed", error);
            throw new Error("Messages Put failed. Please check your credentials and try again.");
        }
    },

    messageDelete: async ({id}:{id:string|number})=> {
        try {
            const response = await apiClient.delete(`endpoints.messages.get${id}/`,);
            return response.data;
        } catch (error) {
            console.error("Messages Delete failed", error);
            throw new Error("Messages Delete failed. Please check your credentials and try again.");
        }
    },

    //Portfolios

    portfolios: async ()=> {
        try {
            const response = await apiClient.get(endpoints.portfolios.get);
            return response.data;
        } catch (error) {
            console.error("Portfolios failed", error);
            throw new Error("Portfolios failed. Please check your credentials and try again.");
        }
    },

    portfolioOne: async ({id}:{id:string|number})=> {
        try {
            const response = await apiClient.get(`endpoints.portfolios.get${id}/`);
            return response.data;
        } catch (error) {
            console.error("Portfolios one failed", error);
            throw new Error("Portfolios one failed. Please check your credentials and try again.");
        }
    },

    portfolioPost: async ({data,id}:{data:Tportfolio,id:string|number})=> {
        try {
            const response = await apiClient.post(`endpoints.portfolios.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Portfolios Post failed", error);
            throw new Error("Portfolios Post failed. Please check your credentials and try again.");
        }
    },

    portfolioPatch: async ({data,id}:{data:Tportfolio,id:string|number})=> {
        try {
            const response = await apiClient.patch(`endpoints.portfolios.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Portfolios Post failed", error);
            throw new Error("Portfolios Post failed. Please check your credentials and try again.");
        }
    },

    portfolioPut: async ({data,id}:{data:Tportfolio,id:string|number})=> {
        try {
            const response = await apiClient.put(`endpoints.portfolios.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Portfolios Put failed", error);
            throw new Error("Portfolios Put failed. Please check your credentials and try again.");
        }
    },

    portfolioDelete: async ({id}:{id:string|number})=> {
        try {
            const response = await apiClient.delete(`endpoints.portfolios.get${id}/`,);
            return response.data;
        } catch (error) {
            console.error("Portfolios Delete failed", error);
            throw new Error("Portfolios Delete failed. Please check your credentials and try again.");
        }
    },

    //Services

    services: async ()=> {
        try {
            const response = await apiClient.get<Tservices[]>(endpoints.services.get);
            return response.data;
        } catch (error) {
            console.error("Services failed", error);
            throw new Error("Services failed. Please check your credentials and try again.");
        }
    },

    serviceOne: async ({id}:{id:string|number})=> {
        try {
            const response = await apiClient.get(`endpoints.services.get${id}/`);
            return response.data;
        } catch (error) {
            console.error("Services one failed", error);
            throw new Error("Services one failed. Please check your credentials and try again.");
        }
    },

    servicePost: async ({data,id}:{data:{},id:string|number})=> {
        try {
            const response = await apiClient.post(`endpoints.services.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Services Post failed", error);
            throw new Error("Services Post failed. Please check your credentials and try again.");
        }
    },

    servicePatch: async ({data,id}:{data:{},id:string|number})=> {
        try {
            const response = await apiClient.patch(`endpoints.services.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Services Post failed", error);
            throw new Error("Services Post failed. Please check your credentials and try again.");
        }
    },

    servicePut: async ({data,id}:{data:{},id:string|number})=> {
        try {
            const response = await apiClient.put(`endpoints.services.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Services Put failed", error);
            throw new Error("Services Put failed. Please check your credentials and try again.");
        }
    },

    serviceDelete: async ({id}:{id:string|number})=> {
        try {
            const response = await apiClient.delete(`endpoints.services.get${id}/`,);
            return response.data;
        } catch (error) {
            console.error("Services Delete failed", error);
            throw new Error("Services Delete failed. Please check your credentials and try again.");
        }
    },

    //Slides

    slides: async ()=> {
        try {
            const response = await apiClient.get(endpoints.slides.get);
            return response.data;
        } catch (error) {
            console.error("Slides failed", error);
            throw new Error("Slides failed. Please check your credentials and try again.");
        }
    },

    slideOne: async ({id}:{id:string|number})=> {
        try {
            const response = await apiClient.get(`endpoints.slides.get${id}/`);
            return response.data;
        } catch (error) {
            console.error("Slides one failed", error);
            throw new Error("Slides one failed. Please check your credentials and try again.");
        }
    },

    slidePost: async ({data,id}:{data:{},id:string|number})=> {
        try {
            const response = await apiClient.post(`endpoints.slides.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Slides Post failed", error);
            throw new Error("Slides Post failed. Please check your credentials and try again.");
        }
    },

    slidePatch: async ({data,id}:{data:{},id:string|number})=> {
        try {
            const response = await apiClient.patch(`endpoints.slides.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Slides Post failed", error);
            throw new Error("Slides Post failed. Please check your credentials and try again.");
        }
    },

    slidePut: async ({data,id}:{data:{},id:string|number})=> {
        try {
            const response = await apiClient.put(`endpoints.slides.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Slides Put failed", error);
            throw new Error("Slides Put failed. Please check your credentials and try again.");
        }
    },

    slideDelete: async ({id}:{id:string|number})=> {
        try {
            const response = await apiClient.delete(`endpoints.slides.get${id}/`,);
            return response.data;
        } catch (error) {
            console.error("Slides Delete failed", error);
            throw new Error("Slides Delete failed. Please check your credentials and try again.");
        }
    },

    //Statistics

    statistics: async ()=> {
        try {
            const response = await apiClient.get(endpoints.statistics.get);
            return response.data;
        } catch (error) {
            console.error("Statistics failed", error);
            throw new Error("Statistics failed. Please check your credentials and try again.");
        }
    },

    statisticOne: async ({id}:{id:string|number})=> {
        try {
            const response = await apiClient.get(`endpoints.statistics.get${id}/`);
            return response.data;
        } catch (error) {
            console.error("Statistics one failed", error);
            throw new Error("Statistics one failed. Please check your credentials and try again.");
        }
    },

    statisticPost: async ({data,id}:{data:{},id:string|number})=> {
        try {
            const response = await apiClient.post(`endpoints.statistics.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Statistics Post failed", error);
            throw new Error("Statistics Post failed. Please check your credentials and try again.");
        }
    },

    statisticPatch: async ({data,id}:{data:{},id:string|number})=> {
        try {
            const response = await apiClient.patch(`endpoints.statistics.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Statistics Post failed", error);
            throw new Error("Statistics Post failed. Please check your credentials and try again.");
        }
    },

    statisticPut: async ({data,id}:{data:{},id:string|number})=> {
        try {
            const response = await apiClient.put(`endpoints.statistics.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Statistics Put failed", error);
            throw new Error("Statistics Put failed. Please check your credentials and try again.");
        }
    },

    statisticDelete: async ({id}:{id:string|number})=> {
        try {
            const response = await apiClient.delete(`endpoints.statistics.get${id}/`,);
            return response.data;
        } catch (error) {
            console.error("Statistics Delete failed", error);
            throw new Error("Statistics Delete failed. Please check your credentials and try again.");
        }
    },

    //Teams

    teams: async ()=> {
        try {
            const response = await apiClient.get(endpoints.teams.get);
            return response.data;
        } catch (error) {
            console.error("Teams failed", error);
            throw new Error("Teams failed. Please check your credentials and try again.");
        }
    },

    teamOne: async ({id}:{id:string|number})=> {
        try {
            const response = await apiClient.get(`endpoints.teams.get${id}/`);
            return response.data;
        } catch (error) {
            console.error("Teams one failed", error);
            throw new Error("Teams one failed. Please check your credentials and try again.");
        }
    },

    teamPost: async ({data,id}:{data:{},id:string|number})=> {
        try {
            const response = await apiClient.post(`endpoints.teams.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Teams Post failed", error);
            throw new Error("Teams Post failed. Please check your credentials and try again.");
        }
    },

    teamPatch: async ({data,id}:{data:{},id:string|number})=> {
        try {
            const response = await apiClient.patch(`endpoints.teams.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Teams Post failed", error);
            throw new Error("Teams Post failed. Please check your credentials and try again.");
        }
    },

    teamPut: async ({data,id}:{data:{},id:string|number})=> {
        try {
            const response = await apiClient.put(`endpoints.teams.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Teams Put failed", error);
            throw new Error("Teams Put failed. Please check your credentials and try again.");
        }
    },

    teamDelete: async ({id}:{id:string|number})=> {
        try {
            const response = await apiClient.delete(`endpoints.teams.get${id}/`,);
            return response.data;
        } catch (error) {
            console.error("Teams Delete failed", error);
            throw new Error("Teams Delete failed. Please check your credentials and try again.");
        }
    },

    //zType-portfolios

    type_portfolios: async ()=> {
        try {
            const response = await apiClient.get(endpoints.type_portfolios.get);
            return response.data;
        } catch (error) {
            console.error("Type-portfolios failed", error);
            throw new Error("Type-portfolios failed. Please check your credentials and try again.");
        }
    },

    type_portfolioOne: async ({id}:{id:string|number})=> {
        try {
            const response = await apiClient.get(`endpoints.type_portfolios.get${id}/`);
            return response.data;
        } catch (error) {
            console.error("Type-portfolios one failed", error);
            throw new Error("Type-portfolios one failed. Please check your credentials and try again.");
        }
    },

    type_portfolioPost: async ({data,id}:{data:{},id:string|number})=> {
        try {
            const response = await apiClient.post(`endpoints.type_portfolios.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Type-portfolios Post failed", error);
            throw new Error("Type-portfolios Post failed. Please check your credentials and try again.");
        }
    },

    type_portfolioPatch: async ({data,id}:{data:{},id:string|number})=> {
        try {
            const response = await apiClient.patch(`endpoints.type_portfolios.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Type-portfolios Post failed", error);
            throw new Error("Type-portfolios Post failed. Please check your credentials and try again.");
        }
    },

    type_portfolioPut: async ({data,id}:{data:{},id:string|number})=> {
        try {
            const response = await apiClient.put(`endpoints.type_portfolios.get${id}/`,data);
            return response.data;
        } catch (error) {
            console.error("Type-portfolios Put failed", error);
            throw new Error("Type-portfolios Put failed. Please check your credentials and try again.");
        }
    },

    type_portfolioDelete: async ({id}:{id:string|number})=> {
        try {
            const response = await apiClient.delete(`endpoints.type_portfolios.get${id}/`,);
            return response.data;
        } catch (error) {
            console.error("Type-portfolios Delete failed", error);
            throw new Error("Type-portfolios Delete failed. Please check your credentials and try again.");
        }
    },

    //Footer
    
    footer: async ()=> {
        try {
            const response = await apiClient.get<Tfooter[]>(endpoints.footer.get);
            return response.data;
        } catch (error) {
            console.error("About failed", error);
            throw new Error("About failed. Please check your credentials and try again.");
        }
    },
    //Reviews
    
    reviews: async ()=> {
        try {
            const response = await apiClient.get<Treviews[]>(endpoints.reviews.get);
            return response.data;
        } catch (error) {
            console.error("About failed", error);
            throw new Error("About failed. Please check your credentials and try again.");
        }
    },































//  exams: async ()=> {
//         try {
//             const response = await authApi.get(endpoints.exam.exams);
//             return response.data;
//         } catch (error) {
//             console.error("Exams failed", error);
//             throw new Error("Exams failed. Please check your credentials and try again.");
//         }
//     },
//  start: async (id:any)=> {
//         try {
//             const response = await authApi.post(`${endpoints.exam.start}${id}/`);
//             return response.data;
//         } catch (error) {
//             console.error("Exams failed", error);
//             throw new Error("Your exam has reached the limit of 3 attempts.");
//         }
//     },
// submit: async (props:any)=> {
//         const {id,test_id,selected_answer_id}=props
//         try {
//             console.log(props);
//             const response =await authApi.post(`${endpoints.submit}${id}/`,{test_id,selected_answer_id});
//             return response.data;
//         }catch(error) {
//             console.error("Submit failed", error);
//         }
// },
// complited: async (id:any)=> {
//         try {
//             const response = await authApi.post(`${endpoints.exam.complited}${id}/`);
//             return response.data;
//         } catch (error) {
//             console.error("Exams failed", error);
//             throw new Error("Exams failed. Please check your credentials and try again.");
//         }
    
// },
// upload: async (data:any)=> { 
//     const file=data.file[0].originFileObj
//     try {
//         const response =await authApi.post(endpoints.upload,{...data,file},{
//             headers: {
//                 'Content-Type': 'multipart/form-data'
//             }
//         });
//         return response.data;
//     }catch(error) {
//         console.error('Fayl yuklashda xato:', error);
//         throw error;
//     }
// }
}
export default restService;
