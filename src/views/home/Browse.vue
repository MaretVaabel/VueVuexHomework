<template>
    <section class="main-container d-flex flex-wrap">
        <div class="grid-container" v-for="(profile, i) in profiles" :key="i">
            <div>
                <img :src="profile.avatar" alt="">
                <p>{{ profile.firstname + ' ' + profile.lastname }}</p>
                <button class="follow-btn" @click="click => toggleClick(click)">{{ button.text }}</button>
            
            </div>
        </div>
    </section>
    
</template>


<script>
import { mapGetters } from "vuex";

export default {
    name: 'Browse',
    data () {
        return {
             followed: false,
             button: {
                 text: 'Follow'
             },
        }
    },
     computed: {
        ...mapGetters("account", ["profiles"]),
     },
     methods: {
         toggleClick(click){
            if(click.target.innerHTML === "Follow")
                click.target.innerHTML = "Followed"
            else
                click.target.innerHTML = "Follow"
                click.target.classList.toggle('followed')
            }
     }
    
}
</script>

<style scoped>
.main-container {
    width: 50%;
    height: 100%;
    min-height: 100%;
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: #ffffff;
}
.grid-container {
    width: 250px;
    height: 200px;
    margin: 15px auto;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
    border-radius: 5px;
}

.grid-container > div {
    background-color: white;
    border-style: solid;
    border-color: lightsteelblue;
    border-radius: 10px;
    border-width: 2px;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
}

.grid-container div img {
    height: 60px;
    border-radius: 50px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    object-fit: cover;
    width: 60px;
}

.follow-btn {
    align-items: center;
    background-color: purple; /*button color*/
    border: 2px solid purple; /*border color*/
    border-radius: 5px;
    color:white; /*text color*/
    margin-top: 10px;
    width: 100px;
    height: 40px;
    line-height: 10px;
}
.follow-btn.followed {
    background-color: white; /*button color*/
    color: purple; /*text color*/

}

</style>