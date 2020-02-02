import Vue from 'vue';

Vue.component('accordion', {
    props: ['item'],

    template: `
                <div>
                    <h4>{{ item.title }}</h4>
                    <a href="#" @click="toggle = !toggle">Details</a>
                    <p v-if="toggle">{{ item.description}}</p>
                </div>
            `,

    data: function () {
        return {
            toggle: false,
        }
    }
});

var vue = new Vue({
    el: '#app',
    data: {
        items: [
            {id:1, title: 'Title 1', description: 'Description for Title 1.'},
            {id:2, title: 'Title 2', description: 'Description for Title 2.'},
            {id:3, title: 'Title 3', description: 'Description for Title 3.'},
        ],
    }
});