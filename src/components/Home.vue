<template>
  <section>
    <div class="background"></div>
    <!-- <sectionbar /> -->

    <div class="product-section">
      <div class="product-bar">
        <div>
          <searchbar
            @onSearchInput="onSearchInput"
            :onFilter="onFilter"
            :search="search"
          />
        </div>
        <div>
          <category
            :catID="catID"
            :categories="categories"
            @onSelectCategory="onSelectCategory"
          />
        </div>
        <!-- <div><min-max /></div> -->
      </div>
      <div class="product-info">
        <loading class="loader" v-if="productLoading"> </loading>
        <h2 class="Notifications" v-else-if="productGetMessage">
          {{ productGetMessage }}
        </h2>
        <div v-else>
          <product
            v-for="product in allProducts"
            :key="product.id"
            :allProducts="product"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import searchbar from "./bars/searchbar.vue";
import category from "./bars/category.vue";
// import minMax from "./bars/minMax.vue";
import product from "./main/product.vue";
import Loading from "./common/Loading.vue";
import Notification from "./common/Notification.vue";

import { mapGetters, mapActions, mapState } from "vuex";
// import Loading from './common/Loading.vue';

export default {
  name: "Home",
  components: {
    searchbar,
    category,
    // minMax,
    product,
    Loading,
    Notification
  },
  data() {
    return {
    //  productLoading:true,
      search: "",
      catID: 0,
    };
  },
  methods: {
    ...mapActions(["getProducts", "getCategoryProduct"]),
    onFilter: function() {
      this.getProducts({ search_key: this.search, category_id: this.catID });
    },
    onSearchInput: function(value) {
      this.search = value;
    },
    onSelectCategory: function(value) {
      this.catID = value;
      this.onFilter()
    }
  },
  computed: {
    ...mapState(["allProducts", "categories","productLoading"]),
    ...mapGetters([ "productGetMessage"])
  },
  created() {
    this.getProducts({ search_key: "", category_id: 0 });
    this.getCategoryProduct();
  }
};
</script>
<style scoped>
.background {
  background: url("../assets/shop.jpg") center center/cover;
  margin: 0px;
  height: 84vh;
}

.product-section {
  max-width: 900px;
  min-width: 300px;
  background: #ffffff;
  margin: 0 auto;
  padding:10px;
  height: 100vh;
}
.product-bar {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 10px;
  margin: 20px auto;
}

.product-info {
  height: 100%;
  display: flex;
  justify-content: center;
}
.product-info div {
 width: 100%; 
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 200px));
  gap: 10px;
 

  /* justify-items: center; */
}
.loader {
  justify-content: center; 
  align-self: center;
}
.Notifications {
  justify-content: center;
  align-self: center; 
  text-align: center;
  color: rgb(223, 151, 151);
  font-size: 1.125rem;
  font-weight: 500;
}
@media (max-width: 630px) {
  .product-bar {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 450px) {
  .product-bar {
    display: grid;
    grid-template-columns: 1fr;
    gap: 5px;
    margin: 15px;
  }
  .product-bar div {
    width: 100%;
  }
}
</style>
