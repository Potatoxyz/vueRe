import Vue from 'vue/dist/vue.js';
import 'bootstrap';
import 'easy-pie-chart/dist/jquery.easypiechart.js';
import 'bootstrap/scss/bootstrap.scss';
import '../src/public.scss';
import '../src/common.scss';
import 'font-awesome/css/font-awesome.css';
import Index from '../src/index.vue';
new Vue({
    el:'#app',
    template:'<Index></Index>',
    mounted:function () {
        console.log('init success')
    },
    components:{
        Index
    }
});