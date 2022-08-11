function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/XSipLvQmK/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);

        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        document.getElementById("voice").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("voice").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        img = document.getElementById("image");

        if(results[0].label == "Barking"){
            img.src = "http://www.instagram.com/rafaelmantesso";
            dog = dog+1;
            document.getElementById("detected").innerHTML = "Detected Dog - "+ dog;
        }
        else if(results[0].label == "Meowing"){
            img.src = "https://media1.giphy.com/media/yXPquATCb8kGk/giphy.gif?cid=ecf05e47lrzrzxt3knw8t0yz6ryfmlbkmlaw0w952694oo6b&rid=giphy.gif&ct=g";
            cat = cat+1;
            document.getElementById("detected").innerHTML = "Detected Cat - "+ cat;
        }
        else if(results[0].label == "Roar"){
            img.src = "https://media0.giphy.com/media/12ANYkldS5ZHsA/giphy.gif?cid=ecf05e47x4nk46tycqc1a9j7i7aoz3zaavwb5x25j21oweld&rid=giphy.gif&ct=g";
            lion = lion+1;
            document.getElementById("detected").innerHTML = "Detected Lion - "+ lion;
        }
        else if(results[0].label == "Mooing"){
            img.src = "https://media1.giphy.com/media/fOV5xeaXmTsCWhqRmr/giphy.gif?cid=ecf05e477rtd8lqu393n6rvg6thl61edoiuhcjd52h0jpy83&rid=giphy.gif&ct=g";
            cow = cow+1;
            document.getElementById("detected").innerHTML = "Detected Cow - "+ cow;
        }
        else{
            img.src = "th.jpg";
            background_noise = background_noise+1;
            document.getElementById("detected").innerHTML = "Detected Background Noise - "+ background_noise;
        }
    }
}
