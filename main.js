song = "";

function preload()
{
    song = loadSound('Music.mp3');
}

function setup()
{
    canvas = createCanvas(500, 400);
    canvas.position(440, 150);
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded()
{
    console.log('Posenet was initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}

function draw()
{
    image(video, 0, 0, 500, 400);
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}