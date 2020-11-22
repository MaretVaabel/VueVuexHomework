import axios from "axios"

//Action to get products list


    export function getPosts({ commit }) {
        let url = "https://private-anon-e0d4b76204-wad20postit.apiary-mock.com/posts";
        axios.get(url).then((response) => {
           //console.log(response)
            commit("setPosts", response.data);

        }).catch(error => {
            console.log(error);
        });
    }

  