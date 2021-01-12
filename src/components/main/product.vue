<template>
  <section class="home-carts">
    <img :src="getImageURL()" alt="" />
    <!-- :src=getImageURL() -->

    <router-link :to="{name:'Store', params: {storeName:allProducts.storeName}}"   >
      <h3>{{ allProducts.product_name }}</h3>
    </router-link>
    <div class="cart">
      <span>{{ allProducts.product_sale_price }}</span>
      <button
        href="#"
        v-bind:class="{ active: isActive }"
        @click="toggleElement()"
      >
        Add cart
      </button>
      <div class="inc" v-bind:class="{ active: !isActive }">
        <inc-dec></inc-dec>
      </div>
    </div>
  </section>
</template>

<script>
import incDec from "../utilities/incDec.vue";
import { IMAGE_URL } from "../../store/api";
// import {P} from "./scr/assets/Product.png"
export default {
  name: "product",
  props: ["allProducts"],

  components: {
    "inc-dec": incDec
  },

  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleElement: function() {
      this.isActive = !this.isActive;
    },
    getImageURL: function() {
      const image_name = this.allProducts.image_url;
      console.log(image_name);
      if (image_name == "") {
        return "/static/img/Product.png";
      } else {
        return `${IMAGE_URL}${image_name}`;
      }
    }
  },
  computed: {}
};
</script>

<style scoped>
.home-carts {
  height: 291;
}
.home-carts h3 {
  font-weight: 500;
  font-size: 1.32rem;
  margin-top: 10px;
  margin-bottom: 10px;
}
.active {
  display: none;
}
.home-carts img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.cart {
  display: flex;
  justify-content: space-between;
}
.cart button {
  background: #ffffff;
  color: #3e8aad;
  font-size: 0.93rem;
  font-weight: 500;
  border: none;
  border-bottom: 2px solid #3e8aad;
  text-transform: uppercase;
  margin-bottom: 5px;
  padding: 0 0 5px 3px;
  outline: none;
}
.cart a:hover {
  text-decoration: none;
  opacity: 0.6;
}
.cart p {
  font-weight: normal;
  font-size: 1rem;
  color: #000000;
}
/* @media (max-width:330px){
     .home-carts img {
        width: 15rem;
    } 
} */
</style>
