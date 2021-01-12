import axios from "axios";
import { BASE_URL, GET_CATEGORY, GET_STORE, GET_STORE_DETAIL } from "./api";

const actions = {
  async getProducts({ commit }, payload) {
    const { search_key, category_id } = payload;
    commit("PRODUCT_LOADING", true);

    try {
      const response = await axios.get(`${BASE_URL}${GET_STORE}?category_id=${category_id}&product_name=${search_key}`);
      const data = response.data.data
      commit("SET_PRODUCTS", data);     
      commit("PRODUCT_LOADING", false);
      if (data == null) {
       commit("PRODUCT_STATUS_MESSAGE", data.message)
      } 
      else {
           commit('PRODUCT_STATUS_MESSAGE', null)
      }
    } catch (e) {
      commit("PRODUCT_STATUS_MESSAGE", e);
      commit("PRODUCT_LOADING", false);
    }
  },
  async getCategoryProduct ({commit}){

    try{

      const cat_response = await axios.get(`${BASE_URL}${GET_CATEGORY}`);
      commit("UPDATE_CATEGORY", cat_response.data.data)

    }catch(e){
     console.log("error", e)

    }

  },
  async getStoreDetail ({commit}, storename){
    try{
      const store_response = await axios.get(`${BASE_URL}${GET_STORE_DETAIL}?storeName=${storename}`);
      commit( "SET_STORE_DEATAIL", store_response.data.data)
      console.log("actions", store_response);

    }catch (e){
      console.log(e)
    }
  }
  
  
};

export default actions;
