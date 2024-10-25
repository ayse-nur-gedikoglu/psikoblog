   
var modal = document.querySelector("dialog");
             
document.querySelector("#open").onclick = function() { 
             
    modal.showModal();
             
}
             
document.querySelector("#kapat").onclick = function() {  
             
    modal.close();
    return false;
             
}
      