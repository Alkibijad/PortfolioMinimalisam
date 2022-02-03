
let webAnimation = {
  init: function () {
    let boxString = "Sasha";
    let boxArray = boxString.split("");
    let box1 = document.querySelector(".conceptBox1");
    let counter = 0;
    let text = "";

    let loop = setInterval(function () {
      if (counter < boxArray.length) {
        text += boxArray[counter];
        counter++;
        box1.innerHTML = text;
      } else {
        clearInterval(loop);
        webAnimation.fillBox2();
      }
    }, 300);
  }, //end of init funk fillBox1
  fillBox2: function fillBox2() {
    let boxString = "Concept";
    let boxArray = boxString.split("");
    let box2 = document.querySelector(".conceptBox2");
    let counter = 0;
    let text = "";

    let loop = setInterval(function () {
      if (counter < boxArray.length) {
        text += boxArray[counter];
        counter++;
        box2.innerHTML = text;
      } else {
        clearInterval(loop);
        webAnimation.addBlur();
      }
    }, 300);
  }, // end of fillBox2
  addBlur: function () {
    let xxx = document.querySelector(".concept-holder-hide");
    let counter = 1;
    xxx.style.opacity = counter;
    let loop = setInterval(function () {
      if (counter > 0) {
        counter = counter - 0.01;
        console.log(counter);
        xxx.style.opacity = counter;
      } else {
        clearInterval(loop);
        webAnimation.addCover();
      }
    }, 50);
  },// end of addBlur
  addCover: function addCover() {
    console.log("radi");
    let xxx = document.querySelector(".concept-holder-hide");
    let width = 400;
    xxx.style.opacity = "1";
  
    let loop = setInterval(function () {
      if (width > 0) {
        console.log("radi");
        width--;
        xxx.style.width = width + "px";
      } else {
        clearInterval(loop);
      }
    }, 10);
  }
};
webAnimation.init()

const moreBtn = document.querySelectorAll('.more-btn')
const answer = document.querySelectorAll('.answer')

for (let i = 0; i < moreBtn.length; i++) {
    moreBtn[i].addEventListener('click', function() {
        answer[i].classList.toggle ('active')
        moreBtn[i].classList.toggle ('active-btn')
    })
}