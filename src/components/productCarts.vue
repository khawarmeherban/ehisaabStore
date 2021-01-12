<template>
    <section>
        <div class="carts-form-wrap">
             <div class="wrapp-carts">
             <div class="package-detail">
                <div class="package-store">
                    <h1>Package 1</h1>
                    <p>Store Name</p>
                </div>
                    <div><cart-product> </cart-product></div>
                    <div><cart-product> </cart-product></div>  
                </div>
                <div class="package-detail">
                    <div><cart-product> </cart-product></div>
                    <div><cart-product> </cart-product></div>  
                </div>
            </div>
            <div class="wrapp-text-inputs">
                <div class="product-form-cart">
                <TextInput :icon="['fa', 'user']" ttype="text" placeholder="Name" > </TextInput> 
                <TextInput :icon="['fa','phone-alt']" type="text" placeholder="Phone" > </TextInput> 
                <TextInput :icon="['fa','city']" type="text" placeholder="City" > </TextInput> 
                <TextInput :icon="['fa','map-marked']" type="text" placeholder="State" > </TextInput> 
                <TextInput :icon="['fa','street-view']" inputtype="text" placeholder="Street Address" > </TextInput> 
            </div> 
            <div class="price-btn">
                <span>Total Price</span>
                <span>2,578 Rs</span>
            </div>  
            <button>Place Order (COD)</button>

            </div>
             
        </div>  
    </section>
</template>


<script>
import cartProduct from './utilities/cartProduct.vue'
// import formProduct from './utilities/formProduct.vue'
import TextInput from './common/TextInput.vue'

export default {
    name:'productCart',
 
   components:{
        TextInput: TextInput,
        'cart-product':cartProduct,
          
        },
}
</script>

<style scoped>
.package-detail {
     background: #FBFBFB;
     box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
     padding: 13px 10px;
     margin-bottom: 20px;
     padding: 30px;
        
}
.package-detail h1 {
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 0;
}
.package-detail div {
    margin-bottom: 10px;
}
.package-detail p {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
}
.wrapp-carts {
    flex: 2;
    margin-right: 30px;
    flex-wrap:wrap;
}
.carts-form-wrap {
    display: flex;
    max-width: 900px;
    margin: auto;
    padding: 15px 10px;
    
}
.wrapp-text-inputs {
    min-width: 300px;
    flex: 1;
}
.product-form-cart {
    background: #FBFBFB;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25); 
    display: grid;
    flex: 1;
    padding: 10px;
   
}
.price-btn {
    width: 100%;
    height: 49px;
    background: #FBFBFB;
    display: flex;
    justify-content: space-around;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.25); 
    align-items: center;
    margin-top: 10px;
}
.price-btn span, .price-btn p {
    font-weight: bold;
    font-size: 1em;
    text-align: center;
}
button {
    width: 100%;
    height: 49px;
    background: #3E8AAD;
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    margin-top: 10px;
}
.wrapp-text-inputs {
    
}
@media (max-width: 730px){
    .carts-form-wrap {
        display: flex;
        flex-direction: column;
        margin: 0;
    }
    .wrapp-text-inputs {
        width: 100%;
        align-self: center;
    }
    .wrapp-carts {
        margin: 0;
    }

}
@media (max-width:394px){
    .package-detail {
        display: flex;
        flex-direction: column;
    
    }
}

</style>