<template>
  <section class="section">
    <div class="business-information">
      <img :src="getBusinessUrl()" />
        <!--  -->
      <div class="about-product">
        <h1>{{storeInfo.business_name}}</h1>
        <p>
          {{storeInfo.narration}}
        </p>
        <p>{{storeInfo.business_address}}</p>
        <div class="address">
          <strong>{{storeInfo.business_phone}}</strong>
          <span>{{storeInfo.category_name}}</span>
        </div>
      </div>
    </div>
    <div class="store-bar-wrap">
      <div class="product-bar">
        <div><searchbar /></div>
        <div><min-max /></div>
      </div>
      <div class="product-info">
        <div>
          <!-- <product
            v-for=" store in storeInfo"
            :key="store.id"
          /> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import searchbar from "./bars/searchbar.vue";
import minMax from "./bars/minMax.vue";
import product from "./main/product.vue";
import { IMAGE_URL } from "@/store/api";

import {  mapActions, mapState } from "vuex";
export default {
  name: "Store",
  components: {
    searchbar,
    minMax,
    product
  },
  methods:{
    ...mapActions(["getStoreDetail"]),
     onStore: function() {
      this.getStoreDetail();
    },
      getBusinessUrl: function() {
      const business_name = this.storeInfo.business_logo;
      console.log(business_name);
      if (business_name == "") {
        return "/static/img/business.8ba96f5.png";
      } else {
        return `${IMAGE_URL}${business_name}`;
      }
    }
    
  },

  created() {
    console.log("here");
    const store = this.$route.params.storeName;
    console.log(store)
    this.getStoreDetail(store);
  },
  computed: {
    ...mapState(["storeInfo"]),
   
  },
//   mounted() {
   
// };
}
</script>

<style scoped>
.section {
  max-width: 900px;
  min-width: 300;
  margin: auto;
  padding: 0 10px;
}

.business-information {
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  margin: 30px auto;
  background: #ffffff;
  justify-items: center;
}
.business-information h1 {
  font-size: 1.23rem;
  font-weight: 500;
}
.business-information img {
  width: 150px;
  height: 175px;
}
.business-information .about-product {
  margin-left: 6rem;
  line-height: 1.25rem;
  font-size: 1rem;
}
.business-information div.address {
  margin: 0px;
  padding: 0;
}
.business-information div.address p {
  margin: 0;
}
.address {
  display: flex;
  justify-content: space-between;
}
.store-bar-wrap {
  background: #ffffff;
  margin: 20px auto;
  justify-content: space-around;
}

.product-bar {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 10px;
  margin: 10px auto;
}
.product-bar div {
  width: 100%;
}
.product-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 10px;
  /* justify-items: center; */
  /* margin: 10px auto;  */
}
@media (max-width: 730px) {
  .business-information {
    display: grid;
    grid-template-columns: 1fr, 1fr;
    width: 100%;
  }
  .business-information .about-product {
    margin-left: 0;
    padding: 20px;
    align-content: center;
  }
}
@media (max-width: 450px) {
  .business-information {
    grid-template-columns: 1fr;
  }
  .product-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: 10px;
  }
  .product-bar {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 350px) {
  .address {
    display: flex;
    flex-wrap: wrap;
  }
  .product-info {
    display: grid;
    grid-template-columns: 1fr;
  }
}
</style>
