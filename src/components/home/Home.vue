<template>

  <div id="app">

    <h1> {{ title }} </h1>
    <h2> Pick your pictures: </h2>

    <p v-show="message"> Error: {{ message }} </p>
    
    <input type="search" class="filter" @input="typedFilter = $event.target.value" placeholder="Type the picture's title">

    <ul class="pics-list">
      <li class="pics-list-item" v-for='(pic, img) of filteredPics' :key='img'>
        <pic-frame :title="pic.titulo">
          <responsive-image slot="content"
            :url="pic.url"
            :title="pic.titulo"
            v-my-transform.animate="1.25"/>

          <router-link slot="btn" :to="{ name : 'save', params: { id: pic._id } }">
            <btn
              btnType="button"
              btnText="UPDATE"/>
          </router-link>
          <btn slot="btn"
            btnType="button"
            btnText="DELETE"
            :needsToConfirm="true"
            buttonKind="dangerous"
            @buttonClickEvent="remove(pic)"/>
        </pic-frame>

      </li>
    </ul>

  </div>

</template>

<script>

  import Frame from '../shared/frame/Frame.vue';
  import Button from '../shared/button/Button.vue';
  import ResponsiveImage from '../shared/responsive-image/ResponsiveImage.vue';
  import PicService from '../../domain/pic/PicService'

  export default {

    components: {

      'pic-frame': Frame,
      'btn': Button,
      'responsive-image': ResponsiveImage

    },

    data () {

      return {
        title: 'PICKING_PICS',
        pics: [],
        typedFilter: '',
        message: ''
      }

    },

    computed: {

      filteredPics() {
        if(this.typedFilter) {
          let filtered = new RegExp(this.typedFilter.trim(), 'i')
          return this.pics.filter(pic => filtered.test(pic.titulo));
        }
        return this.pics;
      }

    },


    methods: {

      remove (pic) {
        this.service.delete(pic._id)
          .then(() => {
            let index = this.pics.indexOf(pic);
            this.pics.splice(index, 1);
            this.message = 'Picture ' + pic.titulo + ' sucefully removed!' 
          },
          error => {
            console.log(error);
            this.message = error.message;
          });
      }

    },

    created () {

      this.service = new PicService(this.$resource);

      this.service.getAll()
        .then(importedPics => this.pics = importedPics,
        error => this.message = error.message);

    }
  }

</script>

<style lang="scss">

  $font: Helvetica, sans-serif;

  #app {
    font-family: $font;
    text-align: center;
    color: #000;
    margin-top: 50px;
    width: 95%;
    margin: 0 auto;
  }

  .pics-list, .pics-list-item {
    list-style: none;
    display: inline-block;
  }

  .filter {
    display: block;
    width: 95%;
  }

  h1 {
    font-weight: bolder;
  }

  h2 {
    font-weight: lighter;
  }

  ul {
    padding: 5px;
    li {
      margin: 0 10px;
    }
  }

</style>
