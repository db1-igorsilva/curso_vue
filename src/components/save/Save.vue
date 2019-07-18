<template>

  <div id="app">

    <h1 v-if="pic._id"> Updating picture {{ pic.titulo }} </h1>
    <h1 v-else> NEW PICTURE </h1>

    <form @submit.prevent="save()">

      <div class="control">
        <label for="title"> TITLE </label>
        <input id="title" autocomplete="off" v-model="pic.titulo">
      </div>

      <div class="control">
        <label for="url"> URL </label>
        <input id="url" autocomplete="off" v-model.lazy="pic.url">
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
        
        this.service
          .save(this.pic)
          .then(() => {
            if (this.id) this.$router.push({ name: 'home' });
          },
          err => alert('Não salvo.'));

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
  }

  h2 {
    font-weight: lighter;
  }

</style>