<template>  
    <div>
        <router-link @click="setStart" to="/home" tag="button">Appuyer pour commencer</router-link>
    </div>
</template>

<script>
    import router from '../router'
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'Start',
        computed: mapGetters([
            'startTime'
        ]),
        methods: mapActions([
            'setStart'
        ])       
    }
</script>

<style scoped>

</style>