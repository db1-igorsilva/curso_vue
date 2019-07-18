<template>

  <div id="app">

    <h1 v-if="pic._id"> Update {{ pic.titulo }} </h1>
    <h1 v-else> New picture </h1>

    <form @submit.prevent="save()">

      <div class="control">
        <label for="title"> TITLE </label>
        <input v-validate data-vv-rules="required|min:3|max:30" name="title"
          id="title" autocomplete="off" v-model="pic.titulo">
        <span class="error" v-show="errors.has('title')"> {{ errors.first('title') }} </span>
      </div>

      <div class="control">
        <label for="url"> URL </label>
        <input v-validate data-vv-rules="required" name="url"
          id="url" autocomplete="off" v-model="pic.url">
        <span class="error" v-show="errors.has('url')"> {{ errors.first('url') }} </span>
        <responsive-image v-show="pic.url" :url="pic.url" :title="pic.titulo"/>
      </div>

      <div class="control">
        <label for="description"> DESCRIPTION </label>
        <textarea id="description" autocomplete="off" v-model="pic.descricao">
        </textarea>
      </div>

      <div class="centered">
        <btn btnText="SAVE" btnType="submit"/>
        <router-link :to="{ name: 'home' }"><btn btnText="CANCEL" btnType="button"/></router-link>
      </div>

    </form>

  </div>

</template>

<script>

import ResponsiveImage from '../shared/responsive-image/ResponsiveImage.vue'
import Button from '../shared/button/Button.vue';
import Pic from '../../domain/pic/Pic';
import PicService from '../../domain/pic/PicService';

export default {

  components: {

    'responsive-image': ResponsiveImage, 
    'btn': Button

  },

  data() {

      return {

          pic: new Pic(),
          id: this.$route.params.id

      }

  },

  methods: {

      save() {
        
        this.$validator
          .validateAll()
          .then(success => {
            if (success) {
              this.service
                .save(this.pic)
                .then(() => {
                  if (this.id) this.$router.push({ name: 'home' });
                },
                err => alert('Não salvo.'));
            }
          })

      }

  },

  created () {

    this.service = new PicService(this.$resource);

    if (this.id) {
      this.service
        .find(this.id)
        .then(pic => this.pic = pic);
    }

  }

}

</script>

<style lang="scss" scoped>
  
  $font: Helvetica, sans-serif;

  .centered {
    text-align: center;
  }

  .control {
    font-size: 1.2em;
    margin-bottom: 20px;

  }
  
  .control label {
    display: block;
    font-weight: bold;
  }

 .control label + input, .control textarea {
    width: 100%;
    font-size: inherit;
    border-radius: 5px
  }

  .error {
    display: inline-block;
    padding: 5px;
    border-radius: 5px;
    margin: 5px;
    font-size: 20px;
    color: #C00; 
  }

  #app {
    font-family: $font;
    text-align: center;
    color: #000;
    margin-top: 50px;
    width: 95%;
    margin: 0 auto;
  }

  h1 {
    font-weight: bolder;
    text-transform: uppercase;
  }

  h2 {
    font-weight: lighter;
  }

</style>