
import Vue from 'vue'
import Router from 'vue-router'
import Principal from './components/principal.vue'
import Detalhes from './components/detalhes.vue'
import App from './App.vue'


Vue.use(Router)

export default new Router ({
    routes: [{
        path: '/',
        component: App,
        children: [
            {path: '/',component:Principal}
        ]
    }, { 
        path: '/detalhes/:id',
        component: Detalhes, 
        props:true
    }], 
    mode:'history'

})