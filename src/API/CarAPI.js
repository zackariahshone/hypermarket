const axios =require( "axios");


const findCars = {

    findcars: ()=>{
        const options = {
            method: 'GET',
            url: 'https://car-data.p.rapidapi.com/cars',
            params: {limit: '10', page: '0', make: "ford"},
            headers: {
              'x-rapidapi-key': '9b0c45a55fmsh11de68402565f84p187797jsnb7a4dd9b0fbb',
              'x-rapidapi-host': 'car-data.p.rapidapi.com'
            }
          };
          
         return axios.request(options);
    }
    

}

export default findCars;

