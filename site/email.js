let currentUser;

function createLogin(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(user=>{
        console.log('Usuario ', user);
        alert('Usuario criado e feito o login');
    }).catch(err =>{
        console.log('erro ', err);
    });
}
function loginEmail(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
        alert('Usuário logado!!!');
    }).catch(err =>{
        console.error('Error', err)
    });
}
currentUser = firebase.auth().currentUser;

function deletaUsuario(){
    currentUser = firebase.auth().currentUser;
    if(currentUser){
        currentUser.delete().then(()=>{
            alert('Usuario excluido');
        })
    }
}
