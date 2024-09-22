makeBubble();
runTimer();
getNewHit();
incScore();
var rn;
var score =0;
function makeBubble() {
    let innerhtml = '';

    for (let i = 1; i <= 154; i++) {
        let n = Math.floor(Math.random() * 10);
        innerhtml += `<div id="bubble">${n}</div>`;
    }
    document.querySelector('#pbtom').innerHTML = innerhtml;
}

function runTimer() {
    let timer = 15;
    let timerint = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#timer').innerText = timer;

        } else {
            clearInterval(timerint);
            document.querySelector('#pbtom').innerText =" chal bhai hata "
        }
    }, 1000);
}

function getNewHit(){
     rn = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = rn;
}

function setScore(){
    score+=10;
    document.querySelector('#scorehi').textContent = score;
}


function incScore(){
    document.querySelector('#pbtom').addEventListener('click', function(details){
        var clickedno = Number(details.target.textContent);
        if(clickedno === rn){
            setScore();
            getNewHit();
        }else{
            document.querySelector('#pbtom').innerText =" chal bhai hata haar gaya tu"
        }
    })
}

