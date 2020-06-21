
document.getElementById("login-form").addEventListener("submit", event => {
    event.preventDefault()
    fetch('/login', {
        method: 'POST',
        body: JSON.stringify({
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        if (response.ok) {
            const audio = new Audio('Windows-98-startup-sound.wav');
            audio.play().then(() => {
                response.json().then(json => window.location.replace(json.path))
            });
        }
        return Promise.reject(response);
    }).catch(e => console.error(e))

})