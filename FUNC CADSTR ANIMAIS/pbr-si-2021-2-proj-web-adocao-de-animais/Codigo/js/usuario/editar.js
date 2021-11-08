const editarForm = document.getElementById('editar');

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

const editar = (event) =>
{
    event.preventDefault();

    const usuario = JSON.parse(sessionStorage.getItem('current_user'));
    const id = usuario.id;
    let index = users.data.map(obj => obj.id).indexOf(id);

    users.data[index].name = editarForm.nome.value;
    users.data[index].dataNascimento = editarForm.dataNascimento.value;
    users.data[index].email = editarForm.email.value;
    users.data[index].password = editarForm.password.value;
    users.data[index].user = editarForm.user.value;
    users.data[index].phone = editarForm.user.value;
    users.data[index].city = editarForm.cidade.value;
    users.data[index].state = editarForm.estado.value;


    localStorage.setItem('users', JSON.stringify(users));
    sessionStorage.setItem('current_user', JSON.stringify(users.data[index]));


    alert("Usuário modificado com sucesso.");
    window.location.href = 'home.html';

}

editarForm.addEventListener('submit', editar);
