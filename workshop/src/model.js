export class model {

    constructor(numberOfInput){


        const inputLayer = tf.input({shape: [numberOfInput-2]});   
        const denseLayer1 = tf.layers.dense({units: 10, activation: 'relu', useBias: false});   
        const denseLayer2 = tf.layers.dense({units: 2, activation: 'relu', useBias: false});    
        //const denseLayer2 = tf.layers.dense({units: 2, activation: 'softmax'});    
        const output = denseLayer2.apply(denseLayer1.apply(inputLayer));    
        const model = tf.model({inputs: inputLayer, outputs: output});    
        const LEARNING_RATE = 0.15;
        const optimizer = tf.train.sgd(LEARNING_RATE);
    
        model.compile({optimizer: optimizer, loss: 'meanSquaredError', lr:0.1})

        const model = tf.sequential();
        model.add(tf.layers.dense(
            {units: 250, activation: 'relu', inputShape: [numberOfInput-2]}));
        model.add(tf.layers.dense({units: 175, activation: 'relu'}));
        model.add(tf.layers.dense({units: 150, activation: 'relu'}));
        model.add(tf.layers.dense({units: 2, activation: 'softmax'}));
        model.compile({
            optimizer: tf.train.adam(),
            loss: 'categoricalCrossentropy',
            metrics: ['accuracy']
        });

        this.model = model;
    }

    predict(){

    }
}