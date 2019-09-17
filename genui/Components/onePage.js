/*
v0 onePage: for creating single page webapps.

How to use:
use data-frame to declare a managed frame.
use data-rdr to redirect to frames (show that frame and hide all other frames).
frames will be 'rendered' by replacing values in {thing} with onepage.thing. 
this value is NOT dynamic and will only be changed on page update.

Useful CSS:
[data-frame]{
    display:none;
}
[data-frame='first page']{
    display:block;
}

*/
var onepage= new (function (){
    
})();
document.addEventListener("click",(e)=>{
    if (e.target.dataset.rdr){
        let frame=document.querySelector(`[data-frame='${e.target.dataset.rdr}']`);
        let otherFrames=frame.parentElement.children;
        for (let i=0;i<otherFrames.length;i++){
            if (otherFrames[i].dataset.frame){
                otherFrames[i].style.display="none";
            }
        }
        frame.style.display="block";
        //onepage
    }
})