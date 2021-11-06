const deletarButton = document.getElementById('deletar');

let initial_users = {
    "data": [
        {
            "id": 1,
            'name': 'Admin',
            'dataNascimento': 12378123,
            'city': 'BH',
            'state': 'MG',
            'phone-number': '4127412784', 
            'user': 'admin',
            'email': 'admin@admin.com',
            'password': 'admin'             
        }
    ]
};

let users = JSON.parse(localStorage.getItem('users'));  

const deletar = (event) =>
{
    event.preventDefault();
    const usuario = JSON.parse(sessionStorage.getItem('current_user'));
    const id = usuario.id;

    users.data = users.data.filter(function (element) { return element.id != id });
    localStorage.setItem('users', JSON.stringify(users));
    sessionStorage.removeItem('current_user');
    alert("Usuário removido com sucesso.");
    window.location.href = 'home.html';
}

deletarButton.addEventListener('click', deletar);
