<template>
  <div>
      <p>
      {{item.title}}
      </p>
      <p>
       {{item.overview}}   
      </p>

  </div>
</template>

<script>
import { BASEURL } from "../api";
export default {


    props: ['id'],
    data() {
        return {
            item: {}
        }
    },

methods: {
    
 buscar() {
      console.log();
      BASEURL.get(`/movie/${this.id}`, {
        params: { api_key: "73555b7e2d1a8c3460a69c7eb3153fdf" },
      }).then((res) => {
       // console.log(res);
        this.item = res.data;
         console.log(this.item);
      });
 }
}, 
beforeMount() {
    this.buscar();
}
}
</script>

<style>
</style>