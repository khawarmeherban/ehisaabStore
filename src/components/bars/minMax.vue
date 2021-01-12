<template>
    <form class="min-max" >        
        <input  type="number" placeholder="Min Price">
        <span>-</span>
        <input  type="number" placeholder="Max Price">
    </form>
</template>

<script>
export default {
    name:"minMax",
}
</script>

<style scoped>
.min-max{
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
    font-size:.93rem;
    margin: auto 5px;
    align-content: center;
   
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  
}

/* .min input[type=number] {
    -webkit-appearance:none;
} */
.min-max input{
    margin: 0;
    width: 100%;
    height: 48px;
    outline: none;
    border: none;
    padding: 0 12px;
    background: #f9f9f9;
    
}
input::placeholder{
    color: #AAAAAA;
    font-size: 1rem;
    padding-left: 0 10px;
    text-align: center;

}
.min-maxinput{
    outline: none;
}
span {
    font-size: 1.15rem;
    font-weight: 700;
    background: #f9f9f9;
}

input[type=text]{
    font-size: 1rem;
    padding: .5rem;
}
@media (max-width:450px){
    .min-max {
      width: 100%;
    }
    .min-max input {
        width: 50%;
    }
   
}

</style>