var area = document.getElementsByClassName("conditions");

for(var i = 0; i < tada.length; i++){
   area[i].addEventListener("click", function(){
    this.nextElementSibling.classList.toggle("visible");
    
  });
}
