import json from '../../echantillon.json';

export class NeuralNetwork {

     /*

    async function test() {

        let jsonObject = JSON.parse(json);

        
        const LEARNING_RATE = 0.15;
        const optimizer = tf.train.sgd(LEARNING_RATE);
  
        model.add(tf.layers.dense({units:20, inputShape:1, activation: 'tanh', useBias: false}))
        model.add(tf.layers.dense({units:1, activation: 'sigmoid', useBias: false}))
        model.compile({optimizer: optimizer, loss: 'meanSquaredError'})
  
        //const x = [[0,0],[0,1],[1,0],[1,1]];
        //const y = [[0],[1],[1],[0]];
        
        for(let i = 0; i < 1; i++){
  
          for(let i = 0; i < x.length; i++){
            console.log(x[i], y[i])
            const h = await model.fit(tf.tensor1d(x[i]), tf.tensor1d(y[i]),
              {epochs: 1} 
            );
          }
          
          
  
          console.log("------------")
        }
        //console.log( " loss:  " + h.history.loss[0] );
    
      }

     
    const inputLayer = tf.input({shape: [numberOfInput-2, 1]});   
    //const denseLayer1 = tf.layers.dense({units: 10, activation: 'relu', useBias: false});   
    const denseLayer2 = tf.layers.dense({units: 2, activation: 'relu', useBias: false});    
    //const denseLayer2 = tf.layers.dense({units: 2, activation: 'softmax'});    
    const output = denseLayer2.apply(inputLayer);    
    const model = tf.model({inputs: inputLayer, outputs: output});    
    const LEARNING_RATE = 0.15;
    const optimizer = tf.train.sgd(LEARNING_RATE);
    model.compile({optimizer: optimizer, loss: 'meanSquaredError', lr:0.1})
  
    
    var model = tf.sequential()
    //model.add(tf.layers.dense({units: 100, inputShape:2, activation: 'sigmoid', useBias: false}))
    //model.add(tf.layers.dense({units:1, activation: 'sigmoid', useBias: false}))
    //model.compile({optimizer: 'sgd', loss: 'meanSquaredError', lr:0.1})
    
    //const xs = tf.tensor2d([[0,0],[0,1],[1,0],[1,1]])
    //const ys = tf.tensor2d([[0],[1],[1],[0]])

    

    //const xs = tf.tensor2d([[217, 0, 0], [419, 13, 15], [360, 9, 4], [593, 11, 4]]);
    //const ys = tf.tensor2d([[0], [1], [1], [1]]);

    async function test() {
      const LEARNING_RATE = 0.15;
      const optimizer = tf.train.sgd(LEARNING_RATE);

      model.add(tf.layers.dense({units:20, inputShape:1, activation: 'tanh', useBias: false}))
      model.add(tf.layers.dense({units:1, activation: 'sigmoid', useBias: false}))
      model.compile({optimizer: optimizer, loss: 'meanSquaredError'})

      const x = [[0,0],[0,1],[1,0],[1,1]];
      const y = [[0],[1],[1],[0]];
      
      for(let i = 0; i < 1; i++){

        for(let i = 0; i < x.length; i++){
          console.log(x[i], y[i])
          const h = await model.fit(tf.tensor1d(x[i]), tf.tensor1d(y[i]),
            {epochs: 1} 
          );
        }
        
        model.predict(tf.tensor1d([0,0])).print()
        model.predict(tf.tensor2d([0,1], [1, 2])).print()
        model.predict(tf.tensor2d([1,0], [1, 2])).print()
        model.predict(tf.tensor2d([1,1], [1, 2])).print()

        console.log("------------")
      }
      //console.log( " loss:  " + h.history.loss[0] );
  
    }
    //const xs = [[0,0],[0,1],[1,0],[1,1]];
    //const ys = [[0],[1],[1],[0]];

    test();
    */
    /*
    let inputs =[];
    let labels = [];
    for(let i = 0; i < jsonObject.length; i++){
      let input = [];
      let label = [];
      Object.keys(jsonObject[i]).forEach( key => {
          if(key != 'id' && key != 'label'){
            input.push(jsonObject[i][key]);
          }else if(key == 'label'){
            label.push(jsonObject[i][key]);
          }
      });     
      inputs.push(input);
      labels.push(label);  
    }
    console.log(inputs, labels);
    const xs = tf.tensor2d(inputs);
    const ys = tf.tensor2d(labels);*/

    // ----------------------------------


    /*
    for(let i = 0; i < jsonObject.length; i++){
      let input = [];
      let label;
      Object.keys(jsonObject[i]).forEach( key => {
          if(key != 'id' && key != 'label'){
            input.push(jsonObject[i][key]);
          }else if(key == 'label'){
            label = jsonObject[i][key];
          }
      });
      console.log(input, label)
      
      const xs = tf.tensor1d(input);
      if(Number(label) == 0){
        const ys = tf.tensor1d([1, 0]);
        model.fit(xs, ys, {epoch:1});
      }else {
        const ys = tf.tensor1d([0, 1]);
        model.fit(xs, ys, {epoch:1
        });
      }
      
      //console.log(input, label);
    }*/

    
   /* train: async (x, y) => {
      const h = await model.fit(x, y), {
          batchSize: 3,
          epochs: 1
      });
      console.log("Loss after Epoch " + i + " : " + h.history.loss[0]);
    }

    const model = tf.sequential({
      layers: [tf.layers.dense({units: 1, inputShape: [10]})]
    });
    model.compile({optimizer: 'sgd', loss: 'meanSquaredError', lr:'0.1'});

    await model.fit(xs, ys, {
        batchSize: 1,
        epochs: 5000
    })

    model.predict(xs).print()
*/
}