<template>
   <div class="product-form">
          <fa-icon  class="icons" :icon="icon" ></fa-icon>
          <input :type="type" :placeholder="placeholder" /> 
   </div>
</template>

<script>
    export default {
        name:'formProduct',
        props:['icon','type', 'placeholder'],
    }
</script>

<style scoped>
    .product-form {
        background: #FBFBFB;
        border: 1px solid #D1D1D1;
        display: flex;
        margin: 10px auto;
        flex: 1;
        padding: 10px;
        width: 100%;
       
    }
    .product-form .icons {
        flex:1;
        font-size: .8rem;
        color: #757575;
        align-self: center;
        margin-right: 10px;
        

    }
   .product-form input[type=text] {
        font-size: 1rem;
        font-weight: 400;
        color: #000000;
    }
    input::placeholder{
        font-size: 1rem;
        color: #757575;
        
    }
        .product-form input {
        background: #FBFBFB;
        flex: 16;
        outline: none;
        border: none;
    }
   @media (max-width: 745px){
      .product-form {
          width: 90%;

      }
   }
   @media (max-width: 390px){
      .product-form {
          width: 100%;

      }
   }
</style>