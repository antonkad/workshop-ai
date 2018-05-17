function setup() {

    $.getJSON("echantillon.json", function(json) {
       console.log(json); // access the response object

   });



/*
  const model = tf.sequential({
     layers: [tf.layers.dense({units: 1, inputShape: [10]})]
  });
  model.compile({optimizer: 'sgd', loss: 'meanSquaredError', lr:'0.1'});

  await model.fit(xs, ys, {
       batchSize: 1,
       epochs: 5000
  })

  model.predict(xs).print()*/


}
