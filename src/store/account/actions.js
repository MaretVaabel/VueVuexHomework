//account module, we will access a dummy API with Axios to fetch a user and then store it in our state

import router from '../../router'
import Axios from 'axios';

export function login({ commit }) {
    let url = 'https://private-anon-e0d4b76204-wad20postit.apiary-mock.com/users/1';
    Axios.get(url).then( response => {
        //console.log(response)
        let userInfo = {
            name: response.data.firstname + ' ' + response.data.lastname,
            email: response.data.email,
            avatar: response.data.avatar
           
        }
        commit("setUserData", userInfo)
        router.push('/post')
    })
        .catch(function (error) {
            console.log(error)
        });
}

export function getProfiles({ commit }) {
    let url = 'https://private-anon-848b6c4be9-wad20postit.apiary-mock.com/profiles';
    Axios.get(url).then( response => {
        //console.log(response)
        
        commit("setProfiles", response.data)
        router.push('/browse')
    })
        .catch(function (error) {
            console.log(error)
        });
}
