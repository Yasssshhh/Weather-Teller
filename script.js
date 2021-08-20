const key='dpjyF1LfHwOo33LHSEqFmEXX8iQjGSjG';

const getCity = async(city) =>{

const url = "http://dataservice.accuweather.com/locations/v1/cities/search";
const query = `?apikey=${key}&q=${city}`

const response = await axios.get(url + query);
const data = await response.data;

return data[0];

}

const getWeather=async(id) =>{

const url = "http://dataservice.accuweather.com/currentconditions/v1/";
const query = `${id}?apikey=${key}`

const response = await axios.get(url + query);
const data = await response.data;

return data[0];
}
