<template>
    <section class="main-container" >
     
      <div v-for="(post, i) in posts" :key="i" :class="[
        'post', { 'is-clicked': isClicked.includes(i) } ]" :id="i">
        <div class="post-author">
          <span class="post-author-info">
            <img :src="post.author.avatar" alt="Post author">
            <small class="ml-2">{{ post.author.firstname + ' ' + post.author.lastname }}</small>
          </span>
          <small>{{ post.createTime }}</small>
        </div>
        <div class="post-image" v-if="post.media != null && post.media.type == 'image'">
               <img :src="post.media.url" type="image" alt="">
        </div>
          <div class="post-image" v-if="post.media != null && post.media.type == 'video'">
            <video controls>
                <source :src="post.media.url" type="video/mp4">
            </video>
        </div>
        <div class="post-title">
          <h3>{{ post.text }}</h3>
        </div>
        <div class="post-actions">
          <button type="button" class="like-button" @click="click => click.target.classList.toggle('liked')">{{ post.likes }}</button>
          
        </div>
      </div>

    </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'Post',

     data () {
         return {
             isClicked: [],
             clicked: false
         }
    },
     computed: {
        ...mapGetters("posts", ["posts"]),
     },
     methods: {
         liked (index) {   
            if (this.isClicked.includes(index)) {
                this.isClicked = this.isClicked.filter(i => i !== index);
                //console.log(this.isClicked)
                this.clicked = false

                
            }else{
                this.isClicked.push(index)
                this.clicked = true
            }
           
         }
     }

}
</script>

<style scoped>

.main-container {
    width: 50%;
    min-height: 100%;
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: #ffffff;
}

.post {
    width: 80%;
    margin: 15px auto;
    box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
    border-radius: 5px;
}

.post .post-author {
    padding: 10px;
}

.post .post-author::after {
    content: "";
    display: block;
    clear: both;
}

.post .post-author .post-author-info {
    float: left;
    position: relative;
    width: 50%;
}

.post .post-author .post-author-info img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}

.post .post-author .post-author-info small {
    position: absolute;
    top: 10px;
    left: 35px;
}

.post .post-author .post-author-info + small {
    float: right;
    color: grey;
    padding: 10px;
}

.post .post-image img, video {
    width: 100%;
    min-height: 150px;
    max-height: 350px;
    object-fit: cover;
    object-position: top center;
}

.post .post-title {
    padding: 10px;
}

.post .post-title h3 {
    display: inline;
}

.post .post-title ~ .post-actions {
    padding: 10px;
}
.like-button {
    background-image: url(../../assets/like.png);
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 5px center;
    background-color: #8a8a8a;
    width: 60px;
    height: 25px;
    line-height: 10px;
    padding-left: 23px;
    text-align: left;
    border: none;
}

.like-button.liked {
    background-color: #01579b;
}  


</style>