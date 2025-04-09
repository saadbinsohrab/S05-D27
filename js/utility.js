
function removePage(event1,event2){
    const homeSection = document.getElementById(event1);
    homeSection.classList.add(event2);
}
function showPage(event3,event4){
    const playGround = document.getElementById(event3);
    playGround.classList.remove(event4);
}
function inrTxt(event5, event6){
    const monitor = document.getElementById(event5);
    monitor.innerText=event6;
}