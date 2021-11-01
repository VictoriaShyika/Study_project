var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if( mySrc === 'images/mycat.jpg'){
        myImage.setAttribute('src', 'images/mycat2.jpg');
    } else{
        myImage.setAttribute('src', 'images/mycat.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + ", can you create name for my ginger cat?";
}
if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + ", can you create name for my ginger cat?";
}
myButton.onclick = function() {
    setUserName();
}