import axios from 'axios';

const getImages = (query) => {
    if (!query){
        return Promise.resolve([]);
    }
    else{
        return axios
        .get(`https://images-api.nasa.gov/search?q=${query}`)
        .then((response)=>{

            let imageResults = response.data.collection.items;

            let parsedImages = imageResults.filter((images)=> images.data[0].media_type==="image");

            const images = parsedImages.map(image => image.links[0].href);
            console.log (`Images: ${images}`);
            

            return images;
        })
        .catch((err)=>{
            console.log(err)
        });        
    }
}
export default getImages;