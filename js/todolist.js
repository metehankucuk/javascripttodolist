let defaultList = document.getElementsByTagName("li");
for (let index = 0; index < defaultList.length; index++) {
  let delbutt = document.createElement("delbutt");
  let x = document.createTextNode("x");
  delbutt.className = "close";
  delbutt.appendChild(x);
  defaultList[index].appendChild(delbutt);
  delbutt.addEventListener("click",deleteListElement);
  defaultList[index].addEventListener("click", liClick);
}


function deleteListElement(){
    //remove the parent of button from its grand parent
    this.parentNode.parentNode.removeChild(this.parentNode)
}


function liClick(){
	this.classList.toggle("checked")
};


function newElement(){
    let ul = document.getElementById("list");
    let candidate = document.getElementById("task");
    let li = document.createElement("li");
    //li.setAttribute('id',candidate.value);
    li.appendChild(document.createTextNode((candidate.value)));

    if (candidate.value === "" || candidate.value == null){
        $(".error").toast("show")}
        else {
            $(".success").toast("show");
            let delbutt = document.createElement("delbutt");
            let x = document.createTextNode("x");
            delbutt.className = "close";
            delbutt.appendChild(x);
            li.appendChild(delbutt);
            ul.appendChild(li);
            delbutt.addEventListener("click",deleteListElement);
            li.addEventListener("click", liClick);
        }
    candidate.value = "";
}