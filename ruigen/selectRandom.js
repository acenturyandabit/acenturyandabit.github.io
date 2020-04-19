function randomRuiEl(element){
    let baseurl="ruigen/";
    let ruiList=['hackertext','kaleidocore','lockcore','matrixtext','radar','starscape'];
    
    let toLoadList=[];
    let toRandomElements=document.getElementsByClassName("selectRandom");
    for (let i=0;i<toRandomElements.length;i++){
        r=toRandomElements[i];
        r.classList.remove("selectRandom");
        let chosen=ruiList[Math.floor(Math.random()*ruiList.length)];
        console.log(chosen);
        if (!toLoadList.includes(chosen))toLoadList.push(chosen);
        r.classList.add(chosen);
    }
    for (let counter=0;counter<toLoadList.length;counter++){
        let element=toLoadList[counter];
        let script=document.createElement("script");
        script.src=baseurl+element+".js";
        document.head.appendChild(script);    
    }
}
if (document.readyState != "loading") randomRuiEl(); else document.addEventListener("DOMContentLoaded", randomRuiEl);