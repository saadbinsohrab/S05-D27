function changePage(event1,event2){
    const re = document.getElementById(event1);
    const sh = document.getElementById(event2);
    re.classList.add('hidden');
    sh.classList.remove('hidden');
}
function removeElement(event3,event4){
    const playGround = document.getElementById(event3);
    playGround.classList.remove(event4);
}
function inrTxt(event5, event6){
    const monitor = document.getElementById(event5);
    monitor.innerText=event6;
}