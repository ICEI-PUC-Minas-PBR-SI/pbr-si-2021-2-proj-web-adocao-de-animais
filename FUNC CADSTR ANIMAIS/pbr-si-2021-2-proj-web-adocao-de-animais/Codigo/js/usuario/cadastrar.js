const cadastroForm = document.getElementById('cadastro');


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

const cadastrar = (event) => {
    
    event.preventDefault();
    
    let novoId = 1;
    
    if(!users)
    {
        users = initial_users;
    }
    if (users.data.length != 0)
    {
        novoId = users.data[users.data.length - 1].id + 1;
    }

    let user = {
        'id': novoId,
        'name': cadastroForm.nome.value,
        'dataNascimento': cadastroForm.dataNascimento.value,
        'city': cadastroForm.cidade.value,
        'state': cadastroForm.estado.value,
        'phone': cadastroForm.telefone.value, 
        'user': cadastroForm.user.value,
        'email': cadastroForm.email.value,
        'password': cadastroForm.password.value
    };


    let email_exists = false;
    let user_exists = false;

    users.data.forEach(element => {
        if(element.email == cadastroForm.email.value)
        {
            email_exists = true;
        }
        if(element.user == cadastroForm.user.value)
        {
            user_exists = true;
        }
    });
    
    if(email_exists == false){
        if(user_exists == false){
            
            users.data.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            sessionStorage.setItem('current_user', JSON.stringify(user));
            alert('Cadastro feito com sucesso');
            window.location.href = 'login.html';
        }
        else{
            alert('Este usuário já foi cadastrado.');
        }
    }
    else{
        alert('Este e-mail já foi cadastrado.');
    }

}

cadastroForm.addEventListener('submit', cadastrar);
