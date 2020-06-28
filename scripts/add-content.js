var myHeading = document.querySelector('h1');

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/med_1505075915_image.jpg') {
      myImage.setAttribute ('src','images/sads.jpg');
    } else {
      myImage.setAttribute ('src','images/med_1505075915_image.jpg');
    }
}

document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myButton = document.querySelector('button');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Casper is here with you, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Casper is here with you, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

