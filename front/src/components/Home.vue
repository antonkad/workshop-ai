<template>  
    <div>
        <img src="../assets/logo.png">

        <video ref="video" id="video" width="640" height="480" autoplay></video>
        <button id="snap" v-on:click="capture()">Snap Photo</button>
        <canvas ref="canvas" id="canvas" width="640" height="480"></canvas>
        

        <md-card>
            <img src="../assets/logo.png">
            <md-card-header>
                <div class="md-title">Demo Workshop Pôle Emploi</div>
                <div class="md-subhead">par le groupe Nostromo I4 à Lille</div>

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
                    console.log(response.data);
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
    .md-card {
        width: 400px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
    }
    .md-button {
        margin-top: 30px;
    }
</style>