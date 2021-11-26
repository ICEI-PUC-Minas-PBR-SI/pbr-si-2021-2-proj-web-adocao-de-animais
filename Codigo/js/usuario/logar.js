const loginForm = document.getElementById('login');

let users = JSON.parse(localStorage.getItem('users'));

const logar = (event) =>
{
    event.preventDefault();
    users.data.forEach(element => {
        if(element.email == loginForm.email.value)
        {
            if(element.password == loginForm.password.value)
            {
                sessionStorage.setItem('current_user', JSON.stringify(element));
                alert('Login feito com sucesso');
                window.location.href = 'home.html';
            }            
        }
    });
    alert('Dados inválidos.');
}

loginForm.addEventListener('submit', logar);