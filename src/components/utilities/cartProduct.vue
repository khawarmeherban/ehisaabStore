<template>
    <div class="cart-info">
        <img src="@/assets/cart.png" alt="">
         <div class="product-info-right-bar">
             <div class="cart-det">
                <h2>Product 1</h2>
                <p> 22 Rs * 2 = 44 Rs</p>
             </div>
             <div class="right-menu">
                 <inc-dec></inc-dec>
                 <fa-icon  class="dele" :icon="['fas','trash-alt']" ></fa-icon>
             </div>       
         </div>
                 
    </div>
</template>

<script>
import incDec from "../utilities/incDec.vue"


export default {
    name:'cart-product',
    components:{
         'inc-dec': incDec,
    }

}
</script>

<style scoped>
/* .product-details {
    display: flex;
} */
.cart-info {
    display: flex;
    /* justify-content: space-between; */
}
.product-info-right-bar{
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 .8rem;
}
/* .cart-info .cart-det {
    margin-left: 10px;
}  */
.cart-det p {
    font-size: .7rem;
}
.cart-info h2{
    font-weight: 500;
    font-style: normal;
    font-size: 1.15rem;
    line-height: 1.25rem;
}
.cart-info span {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 1.2rem;
}
.right-menu {
   text-align: center;
}
.right-menu .dele {
    color: #FF0101;
    cursor: pointer;
    margin-top: .7rem ;
}
 @media (max-width:400px) {
     .product-info-right-bar {
         flex-direction: column;
     }
     .right-menu {
         display: flex;
         flex-direction: row;
         justify-content: space-between;
     }
     .right-menu .dele {
         margin: 0;
     }
 }
    /* .product-details img{
      width: 90px;
    }
    .cart-info {
        display: flex;
        flex-direction: column;
    }
    
    .right-menu {
        text-align: left; 
        margin-top: 10px; 
      }
      /* .right-menu .dele {
          margin: 0;
      }  */


</style>    