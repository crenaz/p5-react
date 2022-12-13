export function sketch(p5) {
    let rotation = 0;

    let mobileNet;

    function modelReady() {
      console.log('Model is ready!');
    }
  
    p5.setup = () => {
      p5.createCanvas(300, 300);
      p5.background(0);
      mobileNet = ml5.imageClassifier('MobileNet', gotResults);
    }

    p5.updateWithProps = props => {
      if (props.rotation) {
        rotation = (props.rotation * Math.PI) / 180;
      }
    };
  
    p5.draw = () => {

    };
  }
  