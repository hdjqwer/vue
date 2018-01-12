import Vue from 'vue';
import App from './component/App.vue';

new Vue ({
    el:'#app',
    render:function(createElement){
        return createElement(App);
    }
})