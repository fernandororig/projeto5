<template>
  <div class="principal">
    <nav class="navbar" toggleable="lg" type="dark" variant="info">
      <a class="navbar-brand" href="#">
        <img src="../imagem/imagem.jpg" width="60" height="60" alt="" />
      </a>
      <form class="form">
        <input class="form-control mr-sm-2" />
        <button class="btn btn-outline-success my-2 my-sm-0">Procurar</button>
      </form>
      <b-nav-item-dropdown class="categoria" text="Categorias" color:black>
        <b-dropdown-item href="#">Tendência</b-dropdown-item>
      </b-nav-item-dropdown>
    </nav>
    <div class="grid">
      <div
        class="grid-item"
        v-for="item in filmes"
        :key="item.id"
        @click="redirecionar(item.id)">
        <p>
          {{ item.original_title }}
        </p>
        <p>Média de votos: {{ item.vote_average }}</p>
        <p>
          {{ item.release_date }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { BASEURL } from "../api";

export default {
  data() {
    return {
      filmes: [],
    };
  },
  methods: {
    // getimagem() {
    //   console.log(BASEURL);
    //   BASEURL.get("/movie/497698/images", {
    //     params: { api_key: "73555b7e2d1a8c3460a69c7eb3153fdf" },
    //   }).then((res) => {
    //     console.log(res);
    //   this.filmes = res.data.results
    //   console.log(this.filmes)
    //   });
    // },
    buscar() {
      console.log(BASEURL);
      BASEURL.get("/discover/movie?sort_by=popularity.desc", {
        params: { api_key: "73555b7e2d1a8c3460a69c7eb3153fdf" },
      }).then((res) => {
        // console.log(res.data.results);
        this.filmes = res.data.results;
        console.log(this.filmes);
      });
    },
    redirecionar(id) {
      this.$router.push({ path: "/detalhes/" + id });
    },
  },

  beforeMount() {
    this.buscar();
    //this.getimagem();
  },
};
</script>

<style>
.categoria {
  align-items: flex-end;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  border: black;
  margin: 1em;
}

.grid-item {
  border: 1px solid black;
  border-radius: 7px;
  box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.4);
  margin: 0.45em;
}

.navbar {
  background: linear-gradient(to right, #060991, #047996);
  justify-content: center;
  align-items: center;
  color: white;
}
.categoria{
  color:black
}

</style>