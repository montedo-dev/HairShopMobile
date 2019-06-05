import { create } from 'apisauce';

const api = create ({
    baseURL: 'https://hairshopfadergs.herokuapp.com/public/api'
});

api.addResponseTransform(response => {
    if(response.data.errors) throw response;
})

export default api;