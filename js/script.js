function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform = "translateY(-500px)"
}
// Typewriter Effect
const texts = [
    "Hacker",
    "Mentor",
    "BB Hunter",
    "Defender",
    "Vulnerability Hunter",
    "Educator"
]

let speed  =100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charcterIndex = 0;
function typeWriter(){
    if (charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000)
    }
}
function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1);
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter, 500)
    }
}
window.onload = typeWriter


// Elements
const popup2 = document.getElementById('popup2');
const openPopupButton2 = document.getElementById('openPopup2');
const closePopupButton2 = document.getElementById('closePopup2');
const popupContent2 = document.querySelector('.popup-content2');

// Function to open the popup
function openPopup2() {
  popup2.style.display = 'flex';
}

// Fun
// Function to close the popup
function closePopup() {
  popup2.style.display = 'none';
}

// Function to close the popup if clicked outside the popup content
function closePopupIfClickedOutside(event) {
  // Check if the clicked element is outside the popup content
  if (!popupContent2.contains(event.target)) {
    closePopup();
  }
}

// Add event listeners for opening and closing the popup
openPopupButton2.addEventListener('click', openPopup2);
closePopupButton2.addEventListener('click', closePopup2);

// Add event listener for clicks on the popup background
popup2.addEventListener('click', closePopupIfClickedOutside);

// Prevent propagation of clicks and touches inside the popup content
popupContent2.addEventListener('click', (event) => event.stopPropagation());
popupContent2.addEventListener('touchstart', (event) => event.stopPropagation());



// This is for the message charCounter 100 letter max.
const messageInput = document.getElementById('contactMessage');
const charCount = document.getElementById('charCount');
const maxChars = 100;

// Update character count and enforce the limit
messageInput.addEventListener('input', () => {
  const currentLength = messageInput.value.length;

  if (currentLength > maxChars) {
    // If input exceeds maxChars, trim it and show an alert
    messageInput.value = messageInput.value.slice(0, maxChars);
    alert(`You can't exceed ${maxChars} characters.`);
  }

  // Update the remaining character count
  const remainingChars = maxChars - messageInput.value.length;
  charCount.textContent = `${remainingChars} characters remaining`;
});
















