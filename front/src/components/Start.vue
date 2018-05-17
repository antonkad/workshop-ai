<template>  
    <div>
        <md-button class="md-raised md-primary" v-on:click="greet">Appuyer pour commencer</md-button>
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
        methods: {
            ...mapActions(['setStart']),
            greet() {
                this.$store.dispatch('setStart')
                router.push('home');
            }
        }
                   
    }
    


</script>

<style scoped>

</style>