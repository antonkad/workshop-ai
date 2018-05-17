<template> 
    <div class="statsContainer wrapper">
        <h3 class="box">Donnée comportement utilisateur</h3>
        <h4 class="box">Début: <a>{{ startTime }}</a></h4>
        <h4 class="box">Moyenne du temps entre chaque clicks: <a>{{ averageTimeBetweenClicks }}</a></h4>
        <h4 class="box">Retour Acceuil: <a>{{ homeReturn }}</a></h4>
        <h4 class="box">Retour Page precedente: <a>{{ backAction }}</a></h4>
        <h4 class="box">Personne présente? <a>{{ personInFront }}</a></h4>
        <h4 class="box">Mécontentement: <a>{{ angerLikelihood }}</a></h4>
        <h4 class="box">Étonnement: <a>{{ surpriseLikelihood }}</a></h4>    
    </div>    
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'Stats',
        computed: mapGetters({
            startTime: 'startTime',
            averageTimeBetweenClicks: 'averageTimeBetweenClicks',
            homeReturn: 'homeReturn',
            backAction: 'backAction',
            personInFront: 'personInFront',
            angerLikelihood: 'angerLikelihood',
            surpriseLikelihood: 'surpriseLikelihood'
        }),
        methods: mapActions([
            'setStart'
        ])         
    }
</script>

<style scoped>
    h3{
        margin:0px;
    }
    h4{
        margin:0px;
    }
    .wrapper{
        display: grid;
        grid-template-columns: 300px;
    }
    .box{
        text-align: start;
    }
    .statsContainer{
        position: absolute;
        height: 300px;
        width: 300px;
        float: left;
        bottom: 0;
        background-color: white;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
</style>