mobileManager.addpage("title",function(){
    this.div=document.createElement("div");
    this.div.innerHTML=`
    <h1>Hello from USYD Foodie!</h1>
    <p>It's your list of all the free (or semi-free) ACCESS food all in one place!</p>
    <button>View up and coming events</button>
    `;
    this.div.querySelector("button").addEventListener("click",()=>{
        localStorage.setItem("seenBefore", "true");
        mobileManager.transitionTo(".list");
    })
})

//Some initalisation code for the mobilemanager
document.addEventListener("DOMContentLoaded",()=>{
    mobileManager.transitionTo("title");
})
