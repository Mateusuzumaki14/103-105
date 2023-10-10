//https://teachablemachine.withgoogle.com/models/vVyKmZJRk/
console.log('oiiiiiiii')
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
 });
var camera=document.getElementById('camera')
 
 Webcam.attach( '#camera' );
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById('result').innerHTML='<img id="captureImg" src="'+data_uri+'"/>'
    })
}
console.log('versao ml5',ml5.version)
//colocar link aqui e deixe o modo json//
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2jbcrdfFs/model.json',modelLoaded)
function modelLoaded(){
    console.log('modelo carregado')
}

function check(){
    img=document.getElementById('captureImg');
    classifier.classify(img,gotResult)
}
function gotResult(error,results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results)
        document.getElementById('resultObjectName').innerHTML=results[0].label
        document.getElementById('resultObjectAccuracy').innerHTML=results[0].confidence.toFixed(2)
    }
}