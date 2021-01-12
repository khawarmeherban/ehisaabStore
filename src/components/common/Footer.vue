<template>
    <footer>
        <div class="our-website">
            <img src="@/assets/logo1.png" >
            <img src="@/assets/pine.png">
        </div>
        <div class="follow-us">
           <a href="#"> <fa-icon :icon="['fab', 'facebook']"></fa-icon></a>
           <a href="#"> <fa-icon :icon="['fab', 'twitter']"></fa-icon></a>
           <a href="#"> <fa-icon :icon="['fab', 'instagram']"></fa-icon></a>
        </div>
    </footer>
</template>

<script>

export default {
    name:'Footer',
    
}
</script>

<style scoped>

footer{
    width: 100%;
    height: 50px;
    background:#E5E5E5;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    align-items: center;
    padding:0 8rem;
    position: fixed;
    border: 0;
}
.our-website img {
    width: 6rem;
    height: 2rem;
    margin-left: 1rem;  
    cursor: pointer;
}
.follow-us a{
    font-size: 1.5rem;  
    margin-right: 30px;
}


</style>