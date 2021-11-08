const FormularioCadastroAnimal = document.getElementById('animal')

let animais = JSON.parse(localStorage.getItem('animais'))

const CadastroAnimal = (event) =>
{
    event.preventDefault()

    idAnimal = 1
    if(animais)
    {
        if(animais.data.length != 0)
        {
            idAnimal = animais.data[animais.data.length - 1].id + 1
        }
    }
    else
    {
        animais = {
            "data": []
        };
    }

    let especie
    if(FormularioCadastroAnimal.cao.checked)
    {
        especie = FormularioCadastroAnimal.cao.value
    }
    if(FormularioCadastroAnimal.gato.checked)
    {
        especie = FormularioCadastroAnimal.gato.value
    }

    let sexo
    if(FormularioCadastroAnimal.macho.checked)
    {
        sexo = FormularioCadastroAnimal.macho.value
    }
    if(FormularioCadastroAnimal.femea.checked)
    {
        sexo = FormularioCadastroAnimal.femea.value
    }
    
    user = JSON.parse(sessionStorage.getItem('current_user'))

    animal = {
        'id': idAnimal,
        'doador': user,
        'nome': FormularioCadastroAnimal.nome.value,
        'especie': especie,
        'porte': FormularioCadastroAnimal.porte.value,
        'sexo': sexo,
        'idade': FormularioCadastroAnimal.idade.value,
    }

    animais.data.push(animal)
    localStorage.setItem('animais', JSON.stringify(animais))
    alert('Animal cadastrado com sucesso');
    window.location.href = 'home.html';
}

FormularioCadastroAnimal.addEventListener('submit', CadastroAnimal);