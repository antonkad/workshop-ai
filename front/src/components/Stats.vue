<template> 
    <div class="statsContainer">
        <h3>Donnée comportement utilisateur</h3>
        <a>Début: {{ startTime }}</a>
        <a>Moyenne du temps entre chaque clicks: {{ averageTimeBetweenClicks }}</a>
        <a>Retour Acceuil: {{ homeReturn }}</a>
        <a>Retour Page precedente: {{ backAction }}</a>
    </div>
    
    
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'Stats',
        computed: mapGetters({
            startTime: 'startTime',
            averageTimeBetweenClicks: 'averageTimeBetweenClicks'
        }),
        methods: mapActions([
            'setStart'
        ])         
    }
</script>

<style scoped>
    .statsContainer{
        position: absolute;
        height: 300px;
        width: 300px;
        float: left;
        bottom: 0;
        background-color: #f6f2f2;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
</style>