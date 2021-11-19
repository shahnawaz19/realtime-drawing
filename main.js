noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup()
{
video = createCapture(VIDEO);
video.size(550, 550);
canvas = createCanvas(300, 300);
canvas.position(550, 100);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function draw()
{
background('#0eeb28');
document.getElementById("square_sides").innerHTML =  "Widht and height of the square will be = " + difference + "px";
fill('#5168db');
stroke('#cf7200');
square(noseX, noseY, difference);
}
function modelLoaded()
{
console.log('poseNet is initialized');    
}
function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX = " + noseX + "noseY = " + noseY);    
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);


}    
}

