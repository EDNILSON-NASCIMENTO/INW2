const firebaseConfig = {
  apiKey: "AIzaSyB3JeDd8OGb8SA87VF_Gz63Ra1aLXs205o",
  authDomain: "projeto2mibteste-b2592.firebaseapp.com",
  projectId: "projeto2mibteste-b2592",
  storageBucket: "projeto2mibteste-b2592.appspot.com",
  messagingSenderId: "747235545111",
  appId: "1:747235545111:web:c83af371f418552b8c8c52",
};

firebase.initializeApp(firebaseConfig);

const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", () => {
  const email = emailField.value;
  const password = passwordField.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Usuário logado com sucesso
      const user = userCredential.user;
      console.log("Usuário logado:", user);
    })
    .catch((error) => {
      // Tratar erros de autenticação
      const errorMessage = error.message;
      console.error("Erro de autenticação:", errorMessage);
    });
});
