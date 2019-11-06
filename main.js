//Global Varibales
const myBoxes = document.getElementsByClassName('block');

//The Functionality
function loopThrough() {
  const changeColor = () => this.classList.toggle('red');

  for (let i = 0, len = this.textContent.length; i < (len * 2); ++i) {
    setTimeout(changeColor, i * 1000);
  };
};

//The Event Listener
for (let i = 0, len = myBoxes.length; i < len; ++i) {
  myBoxes[i].addEventListener('click', loopThrough);
};
