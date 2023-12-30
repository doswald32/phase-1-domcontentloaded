document.addEventListener('DOMContentLoaded', () => {
    let newText = document.getElementById('text');
    newText.textContent = "This is really cool!";
    console.log(newText);
});

console.log('Will this show up BEFORE or AFTER the DOM content loaded has triggered?');