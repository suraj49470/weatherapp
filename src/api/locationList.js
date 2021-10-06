import axios from "axios";
/*
        NOTE :  https://www.metaweather.com/api/ is giving CORS issue when accessed via application.
                so i have used  https://meta-weather.vercel.app/api endpoint which internally calls https://www.metaweather.com/api/ 
                endpoint and resolves CORS issue.
                
*/
const baseUrl = 'https://meta-weather.vercel.app/api/location/search/?';

const getBaseUrl = (type) => {
    return  type === 'location' ? baseUrl+'lattlong=' : baseUrl+'query=';
}


export const getCityListBasedOnLocation = async (LatLong) => {

    try {
        return await axios.get(getBaseUrl('location') + LatLong);
       
    } catch (error) {
        //console.log(error);
        throw error;
    }


}



export const getCityListbaseOnQuery = async (query) => {

    try {

        const { data } = await axios.get(getBaseUrl('query') + query);
        console.log(data);
        if(data && data.length > 0){
            return data;
        }else{
            throw new Error('Records not found...');
        }
        
    } catch (error) {
        throw error;
    }

}
