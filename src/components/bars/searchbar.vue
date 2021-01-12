<template>
  <form>
    <a href="#">
      <fa-icon
        class="search-icon"
        :icon="['fa', 'search']"
      ></fa-icon>
    </a>
    <input
      v-model="searchItems"
      v-on:keyup.enter="onFilter"
      type="text"
      placeholder="Search Your Products"
      @input="$emit('onSearchInput', $event.target.value)"
    />
  </form>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "searchbar",
  props:['search', "onFilter"],
  data() {
    return {
      // allProducts:[],
      searchItems: "",
    }
  },
}
</script>

<style scoped>
form {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background: #f9f9f9;
  border: 1px solid #3333;
  margin-bottom: 1rem;
}
.search-icon {
  color: #aaaaaa;
  background: #f9f9f9;
  font-size: 0.95rem;
  margin: auto 5px;
}
input {
  background: #f9f9f9;
  margin: 0;
  width: 100%;
  height: 48px;
  outline: none;
  border: none;
}
input::placeholder {
  color: #aaaaaa;
  font-size: 1rem;
  padding-left: 10px;
}
@media (max-width: 450px) {
  form {
    width: 100%;
  }
  input {
    width: 90%;
  }
}
</style>
