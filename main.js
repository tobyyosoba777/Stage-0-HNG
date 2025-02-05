function updateUTCTime() {
    const now = new Date();
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');
    document.getElementById('utc-clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Update time every second
setInterval(updateUTCTime, 1000);

// Initialize immediately
updateUTCTime();


function copyEmail() {
    const emailText = document.getElementById("email").innerText;
    navigator.clipboard.writeText(emailText).then(() => {
        alert("Email copied to clipboard!");
    }).catch(err => {
        console.error("Error copying text: ", err);
    })
};