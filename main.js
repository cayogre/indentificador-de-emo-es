prediction1 = ""
prediction2 = ""
Webcam.set({
    width: 350,
    heigth: 300,
    imageformat: 'png',
    pngQuality: 90
})
camera=document.getElementById('camera');
Webcam.attach('#camera');
function bonju(){
 Webcam.snap(function (data_uri) {
    document.getElementById('result').innerHTML = '<img id= "captured_image" src="'+data_uri+'">';
 })
}
console.log('ml5vision',ml5.version);
classifier = ml5.imageClassifier('https:teachablemachine.withgoogle.com/models/b20BfQjXo/model.json', modeloaded)
function modeloaded(){
    console.log('modelloaded!')
}

function speak(){
    var synth = window.speechSynthesis;
speak1="a primeira previsão é" + prediction1
speak2="a segunda previsão é" + prediction2
var faleisso = new SpeechSynthesisUtterance(speak1 + speak2);
    synth.speak(faleisso)
}
function listo(){
    img = document.getElementById('captured_image');
    classifier.classify(img , goResult);
}
function goResult (error, result){
    if(error){
        console.log('errei');
    }else{
        console.log(result);
        prediction1 = result[0].label;
        prediction2 = result[1].label;
        document.getElementById('resultEmotionName').innerHTML = prediction1
        document.getElementById('resultEmotionName2').innerHTML = prediction2
        speak()
        if(prediction1 == "feliz"){
        document.getElementById('I_love_me').innerHTML =  "&#128522";
    }
        if(prediction1 == "triste"){
        document.getElementById('I_love_me').innerHTML =  "&#128532";
    }
        if(prediction1 == "raiva"){
        document.getElementById('I_love_me').innerHTML =  "&#128548";
    }
    if(prediction2 == "feliz"){
        document.getElementById('I_love_me_forever').innerHTML =  "&#128522";
    }
    if(prediction2 == "triste"){
        document.getElementById('I_love_me_forever').innerHTML =  "&#128532";
    }
    if(prediction2 == "raiva"){
        document.getElementById('I_love_me_forever').innerHTML =  "&#128548";
    }
    }
}