export function sketch(p5) {
    let rotation = 0;

    let mobileNet;

    let puffin;

    function modelReady() {
      console.log('Model is ready!');
      // mobileNet.predict(puffin, gotResults);
    }
    mobileNet.predict(puffin, (err, results) => {
      console.log(results);
    });

    // function gotResults(error, results) {
    //   if (error) {
    //     console.error(error);
    //   } else {
    //     console.log(results);
    //   }
    // }

    function imageReady() {
      p5.image(puffin, 0, 0, p5.width, p5.height);
    }
  
    p5.setup = () => {
      p5.createCanvas(300, 300);
      p5.background(0);
      puffin = p5.createImg('https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/sitting-puffin-scotland-stuart-litoff.jpg', imageReady);
      puffin.hide();
      mobileNet = ml5.imageClassifier('MobileNet', modelReady);
    }
  
    p5.draw = () => {

    };
  }
  