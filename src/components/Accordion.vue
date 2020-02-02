<template>
    <div>
        <h4>{{ item.title + ' INSIDE'}}</h4>
        <a href="#" @click="toggle = !toggle">Details</a>
        <p v-if="toggle">{{ item.description}}</p>
    </div>
</template>

<script>
    export default {
        name: "Accordion",

        props: ['item'],

        data: function () {
            return {
                toggle: false,
            }
        }
    }
</script>

<style scoped>

</style>