<template>  
    <div>        
        <canvas ref="canvas" id="canvas" width="640" height="480"></canvas>
        <video ref="video" id="video" autoplay></video>
        
        <md-button class="md-fab photo" v-on:click="capture()">
          <md-icon>photo_camera</md-icon>
        </md-button>

        <md-card>
            <img src="../assets/ripley.png">
            <md-card-header>
                <div class="md-title">Demo Workshop Pôle Emploi</div>
                <div class="md-subhead">par le groupe <b>Nostromo</b> I4 à Lille</div>

                    <md-button class="md-raised md-primary" to="/form">Formulaire</md-button>
                    <md-button class="md-raised md-primary" to="/page-one">Une Page</md-button>
                    <md-button class="md-raised md-primary" to="/page-two">Une Autre Page</md-button>

            </md-card-header>   
        </md-card>    

        <Stats/>
    </div>
</template>

<script>
    import Stats from './Stats'
    import axios from 'axios';
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'Home',
        data() {
            return {
                video: {},
                canvas: {},
                captures: [],
                postBody: '',
                errors: []
            }
        },
        components: {
            Stats
        },
        mounted() {
            this.video = this.$refs.video;
            if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
                    this.video.src = window.URL.createObjectURL(stream);
                    this.video.play();
                });
            }
        },
        methods: {
            ...mapActions(['setPersonInFront']),
            capture() {
                this.canvas = this.$refs.canvas;
                var context = this.canvas.getContext("2d").drawImage(this.video, 0, 0, 640, 480);
                
                var res = canvas.toDataURL("image/png").split(",");

                var json =
                {
                    "requests": [{
                        "image": {
                            "content": res[1]
                        },
                        "features": [{
                            "type": "FACE_DETECTION"
                        }]
                    }]
                };

                axios.post(`https://vision.googleapis.com/v1/images:annotate?key=`, json)
                .then(response => {
                    // reponse.data -> le retour de Google vision
                    if(response.data.responses[0].faceAnnotations){
                        console.log("ya")
                        this.$store.dispatch('setPersonInFront', 'Oui');
                        this.$store.dispatch('setAngerLikelihood', response.data.responses[0].faceAnnotations[0].angerLikelihood);
                        this.$store.dispatch('setSurpriseLikelihood', response.data.responses[0].faceAnnotations[0].surpriseLikelihood);
                    } else {
                        this.$store.dispatch('setPersonInFront', 'Non');
                        this.$store.dispatch('setAngerLikelihood', 'Personne absente');
                        this.$store.dispatch('setSurpriseLikelihood', 'Personne absente');
                        console.log("ya pas")
                    }
                    
                    console.log(response.data.responses[0].faceAnnotations[0].angerLikelihood);
                    console.log(response.data.responses[0].faceAnnotations[0].surpriseLikelihood);

                })
                .catch(e => {
                    console.log(this.errors);
                    this.errors.push(e)
                })
            }
        }
    }

</script>

<style scoped>
    img {
        border-radius: 50%;
        width: 160px;
        margin-top: 40px;
        margin-bottom: 10px;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    #video{
        position:absolute;
        bottom: 0;
        right: 0;
        width: 150px;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }
    #canvas{
        position: absolute;
        bottom: 0;
        width: 400px;
        right: 0;
    }
    .photo{
        position:absolute;    
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        bottom: 10px;
    }
    .md-card {
        background-color: white;
        width: 400px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
    }
    .md-button {
        margin-top: 30px;
    }
</style>