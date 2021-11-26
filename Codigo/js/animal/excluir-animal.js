const removerAnimalButton = document.querySelectorAll(".removerAnimal")


const deletar = (event) =>
{
    event.preventDefault();
    // console.log(removerAnimalButton.value)
    // const usuario = JSON.parse(sessionStorage.getItem('current_user'));
    // const id = usuario.id;

    // users.data = users.data.filter(function (element) { return element.id != id });
    // localStorage.setItem('users', JSON.stringify(users));
    // sessionStorage.removeItem('current_user');
    // alert("Usuário removido com sucesso.");
    // window.location.href = 'home.html';
}

removerAnimalButton.addEventListener('click', deletar);