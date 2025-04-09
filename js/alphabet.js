
function start(){
    const homeSection = document.getElementById('home');
    homeSection.classList.add('hidden');
    const playGround = document.getElementById('play-ground');
    playGround.classList.remove('hidden');

    arham();
}
let bgOff = 'aaaa';
function arham(){
    const getLatter = run();
    const monitor = document.getElementById('p-monitor');
    monitor.classList.remove('bg-teal-300');
    monitor.innerText=getLatter;

    const kLIdd = document.getElementById(getLatter);
    console.log(typeof kLIdd , kLIdd.innerText);
    kLIdd.classList.add('bg-teal-300');
}
let sum = 0; let sub = 3;
function getPreesKey(event){
    let light = document.getElementById(bgOff);
        light.classList.remove('bg-teal-300');
    const score = document.getElementById('s-core');
    const life = document.getElementById('l-ife');
    const getKey = event.key;
    const getLatter = document.getElementById('p-monitor').innerText;
    const lowerLatter =getLatter.toLocaleLowerCase();
    if(lowerLatter === getKey){sum += 1;}
    else{sub -= 1;}
    score.innerText=sum;
    life.innerText=sub;
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
