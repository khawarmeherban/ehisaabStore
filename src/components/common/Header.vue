<template>
    <header>
        	<!-- social links and phone number -->
		<div class="nav">
			<img src="@/assets/logo1.png" >
			<p>Download eHisaab now to maintain your business accounts and get online sale order.</p>       
		</div>
        <!-- Navigation-bar ---------------------------- -->
		  <div class="navigation">
		  	<!-- logo-------- -->
			<a href="#" class="logo">
				<img src="@/assets/logo.png">
			</a>
		  <!-- right menu--------- -->  
		<div class="right-menu">
		     <ul class="menu">
			  	<li> 
				 <router-link :to="{ name: 'Home', }">
				  Home
				  </router-link>
				</li>
			  	<li>
				    <!-- <router-link :to="{ name: 'Store' }">
					  Store
					</router-link> -->
				  </li>
			  	<li> 
					 <router-link :to="{ name: 'productCarts'}">
					  <fa-icon class="fa-shopping-cart" :icon="['fa', 'shopping-cart']"></fa-icon>
					</router-link>
				</li>
			</ul>
	  </div>		  	
		  </div>
		 
    </header>
      
</template>

<script>
export default {
    name:'Header',
    
}
</script>

<style scoped>

ul{
	list-style: none;

}
a{
	text-decoration: none;
}
header {
	width: 100%;
	z-index: 100;
}
.nav{
	width: 100%;
	display: flex;
	justify-content: space-between;
	height: 35px;
	background:rgb(0,0 ,0);
	color: rgb(255, 255, 255);

}
.nav img{
	width: 65px;
	height: 20px;
	margin: auto 2em;
}
.nav p {
	margin: auto 0;
	font-size: 10px;
	padding-right: 30px;
}
/* navigation-bar------------------- */
.navigation{
	display: flex;
	width: 100%;
	height: 60px;
	justify-content: space-around;
	align-items: center;
	background:#E7E7E7;
	box-shadow: 0px 2px 18px 3px rgba(0, 0, 0, 0.25);
	
}

.navigation .logo img{
	width: 4rem;
	height: 3.25rem;
	color: #3E8AAD;
	
	/* text-align: center; */
}
.menu{
	display:flex;
	align-items: center;
	margin: 0;
	justify-content: space-evenly;
}

.right-menu{ 
	display: flex;
	align-items: center;

}
.menu li {
	margin-left:80px;
	text-transform: uppercase;
	font-weight: 500;
    font-size: 17px;
	font-style: normal;
	line-height: 19.92px;
	color: #3E8AAD;
}
.right-menu a{
	color: #3e8aad;
}
.menu a:hover,
.right-menu a:hover{
	color: #0b9d8a;
	transition: all ease 0.3s;
}
.shop-cart {
	margin-left:80px
}

.fa-shopping-cart{
	position: relative;
	font-size: 1.2rem;
	color:rgba(0,0,0,0.54)
	
}
.fa, .fas {
    font-weight: 900;
}

@media (max-width:730px){
	
	.navigation {
		justify-content: space-evenly;
	}
    .menu li {
		margin-left: 20px;
	}
	.nav {
       flex-direction: column;
	   height: 40px;
	   align-items: center;
	   padding: .3rem;
	}
	.nav img {
		width: 3rem;
	    height: 1rem;
		margin: 0;
	}
   
}	
@media (max-width:430px){
	.nav p {
		margin: 0;
		font-size: .4rem;
		font-weight: 250;
	}
}	
</style>