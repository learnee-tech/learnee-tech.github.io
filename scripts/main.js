const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/image1.png") {
    myImage.setAttribute("src", "images/image2.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `heyyyyaaaaa, ${myName}`;
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `heyyyaaaaa,${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };