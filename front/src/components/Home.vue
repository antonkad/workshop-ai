<template>  
    <div>
        <img src="../assets/logo.png">

        <video ref="video" id="video" width="640" height="480" autoplay></video>
        <button id="snap" v-on:click="capture()">Snap Photo</button>
        <canvas ref="canvas" id="canvas" width="640" height="480"></canvas>

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

                axios.post(`https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDiHmPdbXDvO436KevveSYXlRLNa2ChtMs`, json)
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

</style>