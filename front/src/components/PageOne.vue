<template> 
    <div class="statsContainer">
        <md-button class="md-fab home" @click="goBackHome">
            <md-icon>home</md-icon>
        </md-button>
        <md-button class="md-fab back" @click="goBack">
            <md-icon>arrow_back</md-icon>
        </md-button>

        <h3>Page Une</h3>
        <md-button class="md-raised md-primary" v-on:click="greet">Seconde Page</md-button>        
    </div>       
</template>
<script>
import router from '../router'
export default {
    name: 'Page-one',
    methods: {
        goBackHome: function() {
            this.$store.dispatch('incrementBackHome')               
            router.push('home');
        },
        goBack: function() { 
            console.log("incrementBack")
            this.$store.dispatch('incrementBack')               
            router.go(-1);
        },
        greet: function() { 
            router.push('page-two');
        }
    }
}
</script>
<style scoped>
    .home{
        position:absolute;
        right:2%;
        top:2%;
    }
    .back{
        position:absolute;
        left:2%;
        top:2%;
    }
</style>