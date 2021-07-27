//import Vue from 'vue'
import axios from 'axios'

export const BASEURL = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    timeout: 1000,
    header: [{'Authorization': 'Bearer 73555b7e2d1a8c3460a69c7eb3153fdf'}]
    

})

// Vue.use({
//     install(Vue) {
//         Vue.prototype.$http=axios.create({
//             baseURL: 'https://api.themoviedb.org/3'
//         })
//     }
// })