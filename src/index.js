var $ = require("jquery");
var Vue = require("vue");

// CSS
require("./styles/styles.less");

var Sidebar = require('./components/sidebar.vue');

$(".main-bar").before('<div id="vnav-wrapper"><sidebar></sidebar></div>');

new Vue({
    el: '#vnav-wrapper',
    components: {
        sidebar: Sidebar
    }
});