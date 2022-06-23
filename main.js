nosex = 0;
nosey = 0;
function preload() {
clone_nose = loadImage("https://i.postimg.cc/vmxX580B/png-transparent-cartoon-nose-line-nose-people-cartoon-removebg-preview.png");
}

function setup() {
canvas = createCanvas(300,400);
canvas.center();
video = createCapture(VIDEO);
video.size(300,400);
video.hide();
posenet = ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);

}
 function modelLoaded() {
    console.log("posenet is initialized");
 } 
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
         nosex =  results[0].pose.nose.x -40;
         nosey =  results[0].pose.nose.y -40;
         console.log("nosex= " + nosex);
         console.log("nosey= " + nosey);
    }
} 


function draw() {
    image(video,0,0,300,400);
    image(clone_nose,nosex,nosey,80,80);

 //fill (255,0,0);
 //stroke (255,1,0);
 //circle(nosex,nosey,30);
}

function take_snapshot() {
    save('MyFunny_Nose.png');
}



