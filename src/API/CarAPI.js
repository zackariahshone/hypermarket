const axios =require( "axios");


 module.exports = {

   findcars: (seachTerm)=>{
        const options = {
            method: 'GET',
            url: 'https://car-data.p.rapidapi.com/cars',
            params: {limit: '10', page: '0', make: `${seachTerm}`},
            headers: {
              'x-rapidapi-key': '9b74768c9fmsh796c76d49a86f62p1aa253jsn64899c711f9c',
              'x-rapidapi-host': 'car-data.p.rapidapi.com'
            }
          };
          
        return axios.request(options);
    }
    

}



