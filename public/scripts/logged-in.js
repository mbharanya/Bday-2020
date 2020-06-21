const usersTable = document.getElementById('users')


fetch('/logged-in/users')
    .then(response => response.json())
    .then(data => {
        data.map(user => {
            const tr = document.createElement('tr')
            const emailTd = document.createElement('td')
            const pwTd = document.createElement('td')
            emailTd.appendChild(document.createTextNode(user.email))
            pwTd.appendChild(document.createTextNode(user.password))

            tr.appendChild(emailTd)
            tr.appendChild(pwTd)

            usersTable.appendChild(tr)
        })
    }

    );
