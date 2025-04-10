function start(){
    changePage('home','play-ground');
    continueGame();
}
function continueGame(){
    const creatLatter = mathmatics();
    inrTxt('p-monitor', creatLatter);
    document.getElementById(creatLatter).classList.add('bg-teal-300');
}
let sum = 0; let sub = 5;
function getPreesKey(event){
    const preesLatter = event.key;
    const displayLatter = document.getElementById('p-monitor').innerText.toLocaleLowerCase();
    removeElement(displayLatter,'bg-teal-300');
    // document.getElementById(displayLatter).remove('bg-teal-300');
    if(displayLatter === preesLatter){
        sum += 1;
        // continueGame();
    }
    else if(preesLatter=== 'Escape'){
        changePage('play-ground','home');}
    else if(sub > 1){sub -= 1;}
    else{changePage('play-ground','score');
        inrTxt('final-s', sum);}
    inrTxt('s-core', sum);
    inrTxt('l-ife', sub);
    continueGame();
}
document.addEventListener('keyup', getPreesKey);
function mathmatics(){
    const alfhabet ='abcdefghijklmnopqrstuvwxyz';
    const latter =alfhabet.split("");
    const randomDigit = Math.random() * 25;
    const roundFiger = Math.round(randomDigit);
    return latter[roundFiger];
}
document.getElementById('p-again').addEventListener('click', function(){
    changePage('score','play-ground');
    sum = 0;
    inrTxt('s-core', sum);
    sub = 5;
    inrTxt('l-ife', 5);
})