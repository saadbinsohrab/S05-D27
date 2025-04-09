let bgOff = 'aaaa';
function start(){
    removePage('home','hidden');
    showPage('play-ground','hidden');
    arham();
}
function arham(){
    const getLatter = run();
    showPage('p-monitor','bg-teal-300');
    inrTxt('p-monitor', getLatter);
    removePage(getLatter,'bg-teal-300');
}
let sum = 0; let sub = 3;
function getPreesKey(event){
    showPage(bgOff,'bg-teal-300');
    const getKey = event.key;
    const getLatter = document.getElementById('p-monitor').innerText.toLocaleLowerCase();
    if(getLatter === getKey){sum += 1;}
    else if(sub > 1){sub -= 1;}
    else{
        removePage('play-ground','hidden');
        showPage('score', 'hidden');
        inrTxt('final-s', sum);
    }
    inrTxt('s-core', sum);
    inrTxt('l-ife', sub);
    arham();
}

document.addEventListener('keyup', getPreesKey);

function run(){
    const alfha ='abcdefghijklmnopqrstuvwxyz';
    const latter =alfha.split("");
    const rMath = Math.random() * 25;
    const roundFiger = Math.round(rMath);
    const generateLatter = latter[roundFiger];
    bgOff = generateLatter;
    return generateLatter;
}

document.getElementById('p-again').addEventListener('click', function(){
    removePage('score','hidden');
    showPage('play-ground', 'hidden');
    sum = 0;
    inrTxt('s-core', sum);
    sub = 3;
    inrTxt('l-ife', 3);
})
