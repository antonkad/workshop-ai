<template>  
    <div>
        <img src="../assets/diag.png">
        <md-button class="md-raised md-primary" v-on:click="greet">Appuyer pour commencer</md-button>
    </div>
</template>

<script>
    import router from '../router'
    import VueMaterial from 'vue-material'
    import 'vue-material/dist/vue-material.css'
    import { mapGetters, mapActions } from 'vuex'

    import NeuralNetwork from '../neural_network';
    const neuralNet = new NeuralNetwork();
    
    //console.log(NeuralNetwork.init());

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
    img{
        position:absolute;
        height: 400px;
        left: 0;
    }
    .md-button{
        position:absolute;
        margin-left: auto;
        margin-right: auto;
        bottom: 30px;
    }
</style>