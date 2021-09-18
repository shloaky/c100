var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition(); 

var Textbox = document.getElementById("textbox"); 
function start(){ 
    Textbox.innerHTML = ""; recognition.start();
    
 }
 recognition.onresult = function(event) { 
     console.log(event);
     var Content = event.results[0][0].transcript;
     Textbox.innerHTML = Content; 
     console.log(Content);
     if(Content=="take my selfie"){
     console.log("taking selfie");
     speak();
     }
 }
function speak(){
    var synth = window.speechSynthesis;
    speakdata = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function()  {
        take_selfie();
        save();
    }, 5000);
}
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:90,
});
function take_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("camresult").innerHTML = '<img id = "myselfie" src = "'+data_uri+'"/>';

    });

}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("myselfie").src;
    link.href = image;
    link.click();

}


