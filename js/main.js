// JS SCIFI
const letters = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
const customHeading = document.querySelector('.custom-heading');
let HTBinterval;
let isAnimationRunning = false;

const stopAnimation = (isMouseOver) => {
  clearInterval(HTBinterval);
  customHeading.innerText = customHeading.dataset.value;
  isAnimationRunning = false;
  
  if (isMouseOver) {
    customHeading.onmouseleave = customHeading.ontouchend = () => {
      stopAnimation(false);
    };
  }
};


const startAnimation = () => {
  let iterations = -13;
  customHeading.dataset.value = customHeading.innerText;
  isAnimationRunning = true;

  HTBinterval = setInterval(() => {
    customHeading.innerText = customHeading.innerText.split("") 
      .map((letter, index) => {
        if (index < iterations) {
          return customHeading.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");

    if (iterations >= customHeading.dataset.value.length) {
      stopAnimation();
    }
    iterations += 1.4 / 3;
  }, 42);
};

customHeading.addEventListener('mouseover', event => {
  if (!isAnimationRunning) {
    startAnimation();
  }
});

customHeading.addEventListener('mouseleave', event => {
  stopAnimation();
  startAnimation();
});

customHeading.addEventListener('touchstart', event => {
  if (!isAnimationRunning) {
    startAnimation();
  } else {
    stopAnimation();
    startAnimation();
  }
});

// Trigger animation when page finishes loading
window.onload = startAnimation;



let input = document.querySelector('.txt-input');
let content = document.querySelector('.content');
let clear = document.getElementsByClassName('.clear');


input.addEventListener('keydown', handleCommand);

function handleCommand(event) {
  if(event.key === 'Enter') {
    const command = input.value.trim();
    input.value = '';
    content.innerHTML = ''; // Clear previous output
    content.innerHTML += `visitor@Anonymous:~$ <br><br>`;
    content.innerHTML += `<br>`
    executeCommand(command);
    
  }
}




function executeCommand(command) {
  switch (command) {
    case "help":
      content.innerHTML += '<p>Available commands:<br><br> <span class="cmd-txt">help</span>, <span class="cmd-txt">clear</span>, <span class="cmd-txt">updates</span>, <span class="cmd-txt">aboutMe.</span></p><br>';
      break;
        case "clear":
            setTimeout(function() {
                content.innerHTML = '<a id="clear"></a>';
                before = document.getElementById("clear");
              }, 1);
            break;
        case "aboutMe":
            let aboutMe = document.createElement('div');
            aboutMe.classList.add('about-me');
            aboutMe.innerHTML =
            `
            <span><br>Welcome visitor, <br>
            I am AnonHack3r.<br>
            <br>Programming Experience: <br>
            Swift, C#, JavaScript, NodeJS, Bash, Powershell, SQL, Go, PHP, Ruby and Python. <br><br>
            Work: <br>
            Web3 Solidity Smart Contract Auditor, iOS Bug Bounty Hunter, Hacker0ne Hacker, Web Developer, and iOS Developer.<br><br>
            Other information: <br><br>
            OSCP Student, Sound Engineer. <br>
            We all have a set of unique skills; <br><br>
            We are more powerful when we empower each other.<br><br>
            Active CTF Hacker: Hack The Box <br><br>   
            HTB Username: AnonHack3r<br><br>
            HTB Rank: Elite Hacker<br><br>
            `
            content.appendChild(aboutMe);
            input.value = '';
            break;
          case "updates":
            
            let updates = document.createElement('div');
            updates.classList.add('about-me');
            updates.innerHTML =
            `
            <span> 
            <br>
            Updates: Adding alot! Web3/BugBounty/CTF's.<br>
            Commands: home, learning, OSCP Notes<br>
            Other Updates: Updating...<br>
            </span>
            `

            content.appendChild(updates);
            input.value = '';
          break;
        default:
            content.innerHTML += `Visitor!<br><br>`;
            content.innerHTML += ` ${command}: is an unknown command.<br>`;
            content.innerHTML += ` For a list of commands type help.`
    }
}

document.querySelectorAll('details').forEach(function(details) {
  details.addEventListener('toggle', function() {
    if (details.open) {
      window.scrollTo(0,document.body.scrollHeight);
    }
  });
});

// Elements
const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');
const popup = document.getElementById('popup');

// Open pop-up
openPopup.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Close pop-up
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Close pop-up when clicking outside of it
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});
