import Vue from 'vue';
import Accordion from "./components/Accordion";
import List from "./components/List";

window.axios = require('axios');  // install axios globally

new Vue({
    el: '#app',
    components: {
        Accordion, List,
    },

    // axios
    mounted: function() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => this.posts = response.data)
            .catch(error => this.posts = [{title: 'No Posts Found.'}])
            .finally(() => console.log('Data Loading Complete...'));
    },

    data: {
        items: [
            {id:1, title: 'Title 1', description: 'Description for Title 1.'},
            {id:2, title: 'Title 2', description: 'Description for Title 2.'},
            {id:3, title: 'Title 3', description: 'Description for Title 3.'},
        ],

        posts: null,
    }
});