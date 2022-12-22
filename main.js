function setup() {
    classifier= ml5.imageClassifier('MobileNet',modelLoaded);
  }
  
  function modelLoaded() {
    console.log('Model Loaded');
  }
  
  function gotResults(error, results) {
    if (error) {
      console.error(error);
    } else {
      if ((results[0].confidence>0.5)&&(previous_result !=results[0].label)) {
        console.log(results);
        previous_result= results[0].label;
        var synth=window.SpeechSynthesisUtterance(speak_data);
        synth.speak_data(utterThis)
  
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
        document.getElementById("result_object_name1").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy1").innerHTML=results[0].confidence.toFixed(3);
        document.getElementById("result_object_name1").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy1").innerHTML=results[0].confidence.toFixed(3);
      }
    }
      
  }