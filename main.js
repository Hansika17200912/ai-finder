object = [];
status = "";

function preload(){
}

function setup(){
    canvas = createCanvas(360, 310);
    canvas.center();
    video = createVideo(VIDEO);
    video.size(360, 310);
    video.hide();
}

function draw(){
    image(video, 0, 0, 360, 310);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting Objects";
    object_name = document.getElementById("object_name").value;
}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
}