const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";


const modalContainer = document.querySelector('.o-modal-container');
const hide = "hide";


for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
    console.log('works');
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    document.querySelector(".o-modal.is-visible").classList.remove(isVisible);
    console.log('hide it')
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".o-modal.is-visible")) {
    document.querySelector(".o-modal.is-visible").classList.remove(isVisible);
    
  }
});


document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".o-modal.is-visible")) {
    document.querySelector(".o-modal.is-visible").classList.remove(isVisible);
  }
});



//__________________________________
// show hidden div for box-1
const buttonSetTema = document.getElementById('tema');
buttonSetTema.addEventListener("click", function(){
  let div = document.getElementById("box-1");
  
  if(div.style.display === "none"){
     div.style.display = "flex";
  } else {
    div.style.display = "none";
  }
}); 

//__________________________________
// show hidden div for box-2
const buttonLegoValues = document.getElementById('lego-values');
buttonSetTema.addEventListener("click", function(){
  let div = document.getElementById("box-2");
  
  if(div.style.display === "none"){
     div.style.display = "flex";
  } else {
    div.style.display = "none";
  }
}); 



// _______close one and open another one - work in progress
const modalOne = document.getElementById("modal1");
const modalTwo = document.getElementById("modal2")
const modalThree = document.getElementById("modal3")


function showModalHideModal(){
  if(modalOne.style.visibility === "visible"){
    console.log('visibile')

  }
}

modalOne.addEventListener("click", showModalHideModal);

