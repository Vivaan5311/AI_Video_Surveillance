video = "";
objects = [];
status = "";
function preload(){
    video = createVideo('video.mp4');
    video.hide();
}
function setup(){
    canvas = createCanvas(480, 400);
    canvas.center();
}

function buttun(){
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("h3").innerHTML = "Status: Detecting Objects";
    
}
function modelloaded(){
console.log('model loaded');
status = true;
video.loop();
video.speed(1);
video.volume(1);
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(video, 0, 0, 480, 400);
        if(status != ""){
            objectDetector.detect(video, gotResults);
            for (i = 0; i < objects.length; i++){
                document.getElementById("h3").innerHTML = "Status : object(s) detected"
                document.getElementById("H3").innerHTML = "Number Of Objects detected are : "+ objects.length;
            
                fill("cyan");
                percent = floor(objects[i].confidence * 100);
                text(objects[i].label + " " + percent + "%", objects[i].x + 10, objects[i].y + 10)
                noFill();
                stroke("cyan");
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
            }
        }
    }
function button(){
    video.pause();
}
function buttan(){
    video.stop();
}