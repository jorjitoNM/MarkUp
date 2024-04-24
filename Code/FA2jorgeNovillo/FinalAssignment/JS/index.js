document.getElementById("loginButton").addEventListener("click", validateCredentials);

function validateCredentials () {
    let credentials = { username: document.getElementById("userName").value, password: document.getElementById("password").value };

    fetch("https://informatica.iesquevedo.es/marcas/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response failed');
            }
            return response.json();
        })
        .then(data => {
            if (data == true) {
                window.location.href = "table.html";
                document.getElementById("loginError").innerHTML = "";
            }
            else {
                document.getElementById("loginError").style.color = "Red";
                document.getElementById("loginError").innerHTML = "Invalid credentials";
            }
        })
        .catch(error => {
            console.error('Error in the fetch', error);
        })
}