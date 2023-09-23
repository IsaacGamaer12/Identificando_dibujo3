function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
}

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    background("white");

    canvas.mouseReleased(classifyCanvas);
}

function draw(){
    
    strokeWeight(5);
    stroke('purple');

    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    } else{
        document.getElementById("label").innerHTML = 'Dibujo: ' + results[0].label;
        document.getElementById("confidence").innerHTML = 'Parecido: ' + Math.round( results[0].confidence * 100) + "%";
    }

}