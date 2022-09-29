console.log('ml5 version:', ml5.version);
console.log('p5 version:', p5);

// ** From https://learn.ml5js.org/#/tutorials/hello-ml5

//comments are my own

//*Step one: define the variables  */

//Initialize the Image Classifier method with Mobile (part of the ml5 lbrary)

let classifier;

//A variable to hold the image we want to classify
let img;


//*Step two: Load the image and imageClassifier 

/*
 Because ML models can be large, we use the preload() to ensure everything is ready to go before we send the iomage
 to imageClassifier

*/

function preload() {
    console.log('Preloading....');
    classifier = ml5.imageClassifier('MobileNet');
    img = loadImage('https://picsum.photos/400/400');
    
}

//* Step 3: Setup, Classify, and Display

/* 
    We use p5.js setup fucntion to prepere the things
    that only run once: canavs, classiffy(), render.
    The classify function takes two parameters: 1. the image you want to classify and 2. a callback function to
    gotResult
*/



function setup(){
    createCanvas(400, 400);
    classifier.classify(img, gotResult);
    image(img, 0, 0);
}


//* Step 4: Desine gotResult CB function

/*
 the gotResult() function takes two paramters- error and result. These get passed to got result() when .classif() finishes classifying the image. 

 Two divs are created: one that lists the results and the other that states the confidence.

 The nf if a string formatting function

*/


//A function  to run when we get any errors and the result

function gotResult(error, results) {
    // Display error in the console
    if (error) {
      console.error(error);
    } else {
      // The results are in an array ordered by confidence.
      console.log(results);
      const confDecimal = (results[0].confidence);
      console.log('ConfDEcimal', confDecimal);
      const displayConfidence =  Math.round(confDecimal * 100).toFixed(2)
      createDiv(`I am ${(displayConfidence)}% confident that this is a ${results[0].label}`);
    }
} //endGotResult