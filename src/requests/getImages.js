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
            //console.log(imageResults[0].data[0].title);//title isolated
            console.log (imageResults[1].data[0]);

            let parsedImages = imageResults.filter((images)=> images.data[0].media_type==="image");
            console.log(parsedImages)

            const images = parsedImages.map(image => image.links[0].href);
            //console.log (`Images: ${images}`); 

             return images;   
           

        })
        .catch((err)=>{
            alert("Something went wrong. Please refresh your browser");           
        });        
    }
}
export default getImages;