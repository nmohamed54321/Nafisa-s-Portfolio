// Add your query for the sign now button here
let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {

  document.body.classList.toggle("dark-mode");

}

themeButton.addEventListener("click", toggleDarkMode);





const addSignature = () => {
  const newSignature= document.createElement('p');
  const name= document.getElementById("fullname").value;
  const hoppie= document.getElementById("email").value;
  // const formSignUp= document.getElementId("formsignup");
  newSignature.textContent = "🖊️ " + name + hoppie;
  const fsignup= document.getElementById("formsignup")
  fsignup.appendChild(newSignature);
  // console.log(name + homeTown);

}
// console.log(hometowninput);

// Add a click event listener to the sign now button here
 // signNowButton.addEventListener("click", addSignature);


const validateForm = () => {
  let containsErrors = false;

  let petitionInputs = document.getElementById("sign-petition").elements;
  // TODO: Loop through all inputs

  for (let i = 0; i < petitionInputs.length; i++){
    if (petitionInputs[i].value.length < 2){
      petitionInputs[i].classList.add('error');
      containsErrors= true;
    }
    else{
      petitionInputs[i].classList.remove('error');
    }
  }
  
  if (containsErrors == false){ 
    addSignature(); // this part is not working
    toggleModal();
    for (let i= 0; i < petitionInputs.length; i++){
      petitionInputs[i].value= "";
      containErrors = false;
    }

  }

  // TODO: Validate the value of each input



  // TODO: Call addSignature() and clear fields if no errors

}
const signNowButton = document.getElementById("sign-now-button");
signNowButton.addEventListener('click', validateForm);

let animation = {
  revealDistance: 150,
  intialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

const revealablecontainers= document.querySelectorAll(".revealable");

const reveal= () =>{
  for(let i= 0; i < revealablecontainers.length; i++){
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealablecontainers[i].getBoundingClientRect().top;
    
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      /* add the active class to the revealableContainer's classlist */
         revealablecontainers[i].classList.add('active');
    } else {
      /* remove the active class to the revealableContainer's classlist */
      revealablecontainers[i].classList.remove('active');
    }
    
  }
}
window.addEventListener('scroll', reveal);

const toggleModal = () =>{
  const modal= document.getElementById("thanks-modal");
  const modalContent= document.getElementById("thanks-content-model");
  const modelImage= document.getElementById("Thank-u-model")
  modal.style.display= "flex";
  // modelImage.style.display= "flex";
  modal.textContent = name + " Thank you for adding your interest to the list.";
}

setTimeout(() => {
  modal.style.display = "none";
}, 4000)
