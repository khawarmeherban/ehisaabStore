<template>
    <div class="lds-dual-ring"></div>
</template>

<script>
export default {
    // 
    
    
}
</script>
<style  scoped>
.lds-dual-ring {
  display: inline-block;
  width: 120px;
  height: 130px;
}
.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 100px;
  height: 100px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid rgb(58, 69, 161);
  border-color: rgb(64, 75, 168) transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}
@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>