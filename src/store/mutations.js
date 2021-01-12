const mutations = {
    SET_PRODUCTS: (state, allProducts) => {
       state.allProducts = allProducts;
    },
    PRODUCT_LOADING: (state, payload) => {
       state.productLoading = payload;  
    },
    PRODUCT_STATUS_MESSAGE: (state, payload) => {
        state.products_get_message = payload;
     },
     UPDATE_CATEGORY: (state, payload) => {
        state.categories = payload ;
     },
     SET_STORE_DEATAIL: (state, payload) =>{
        state.storeInfo= payload;
     }

   }

export default mutations
