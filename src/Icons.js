
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faTwitter, faYoutube, faInstagram }
from '@fortawesome/free-brands-svg-icons'
import {faCaretDown, faSearch , faShoppingCart, faUser, faPlusCircle, faMinusCircle, faPhoneAlt, faCity, 
    faTrashAlt ,faMapMarked, faHome, faStreetView} 
from '@fortawesome/free-solid-svg-icons'

library.add(faFacebook, faTwitter,faYoutube, faInstagram ,
    faSearch, faShoppingCart, faUser, faCaretDown, faPlusCircle, 
    faTrashAlt ,faMinusCircle,faPhoneAlt, faCity,faMapMarked, faHome,faStreetView)
Vue.component('fa-icon', FontAwesomeIcon)