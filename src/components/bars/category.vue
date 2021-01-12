<template>
  <div class="search-cate">
    <select v-model="category" @change="$emit('onSelectCategory',$event.target.value)">
      <option
        v-for="category in categories"
        :key="category.id"
        :value="category.id"
        >
        {{ category.name}}
      </option
      >
    </select>
  </div>
</template>
<script>
export default {
  name: "category",

  props:["catID", "categories"],
  data(){
    return{
      category:"",
    }
  },
};
</script>
<style scoped>
.search-cate {
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background: #f9f9f9;
  border: 1px solid #3333;
  margin-bottom: 1rem;
}
select {
  border: none;
  outline: none;
  background: #f9f9f9;
  color: #aaaaaa;
  width: 100%;
}
select:hover{
  color: none;

}
option {
  display: block;
  background: #f9f9f9;
  color:rgba(77, 73, 73, 0.897);
  font-size: 1.1rem;
  font-weight: normal;
  padding: .9rem;
  border: 1px solid #aaaaaa;
  border-radius: 1rem;
  cursor: pointer;
}
option:hover{
  color:green;
}
/* .search-cate select option:hover {
  overflow: visible;
} */
</style>
