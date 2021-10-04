const getUserLocation =  () => {


    return new Promise((resolve,reject) => {

    
       navigator.geolocation.getCurrentPosition((cords) => (resolve(cords)) , (error) => (reject(error)));
   


    });


}


export const fetchLocation = async () => {

        try{
                return await getUserLocation();
            
        }catch(e){
            throw e;
        }
}





