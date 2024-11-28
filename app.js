/* To monitor my site's traffic */

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-XXXXXXXXX-X');


// Name typing intro
const text = "Welcome! To Tshering's Portfolio";
const typingSpeed = 100; // Adjust typing speed (ms)

let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, typingSpeed);
    }
}

// Start typing effect when the page loads
window.onload = typeWriter;
