<template> 
    <div class="statsContainer">
        <md-button class="md-fab home" @click="goBackHome">
            <md-icon>home</md-icon>
        </md-button>
        <md-button class="md-fab back" @click="goBack">
            <md-icon>arrow_back</md-icon>
        </md-button>
    
        <h3>Page Deux</h3>        
    </div>       
</template>
<script>
import router from '../router'
export default {
    name: 'Page-two',
    methods: {
        goBackHome: function() {
            router.push('home');
        },
        goBack: function() {      
            router.go(-1);
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