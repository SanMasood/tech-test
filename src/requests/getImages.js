import axios from 'axios';

const getImages = (query) => {
    if (!query){
        return Promise.resolve([]);           
            
    }
    else{
        const request = query.toLowerCase(); 

        return axios
        .get(`https://images-api.nasa.gov/search?q=`+request)
        .then((response)=>{
            

            let imageResults = response.data.collection.items;
            
            let parsedImages = imageResults.filter((images)=> images.data[0].media_type==="image");

            console.log(parsedImages);
            const processedImages = parsedImages.map(image => { 

                return{  
                    url: image.links[0].href, 
                    title: image.data[0].title
                }
            });
            
            console.log(processedImages);
            
            return processedImages;
           

        })
        .catch((err)=>{
            alert("Something went wrong. Please refresh your browser");       
        });        
    }
}
export default getImages;