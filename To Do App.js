let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
let li=document.querySelector("li");

btn.addEventListener("click", function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    
    let newBtn=document.createElement("button");
    newBtn.innerText="Delete";
    item.appendChild(newBtn);
    newBtn.classList.add("delete");

    ul.appendChild(item);
    inp.value="";
})

ul.addEventListener("click", function(event){
   if(event.target.nodeName == "BUTTON"){
    let p=event.target.parentElement;
    p.remove();
   }
})


