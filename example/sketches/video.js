export function sketch(p5) {
    let rotation = 0;

    let mobileNet;
  
    p5.setup = () => {
      p5.createCanvas(300, 300);
      p5.background(0);
      mobileNet = ml5.imageClassifier('MobileNet', gotREsults)
    }

    p5.updateWithProps = props => {
      if (props.rotation) {
        rotation = (props.rotation * Math.PI) / 180;
      }
    };
  
    p5.draw = () => {

    };
  }
  