# Yelp_Test_React
* Add a yelp.js file into api folder with the following code. Replace YourKey with your API key from yelp:

import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer YourKey'
    }
});
