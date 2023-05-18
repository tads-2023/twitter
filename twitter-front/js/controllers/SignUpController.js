class SignUpController {
    constructor() {
        let view = new SignUpView().template();
        document.querySelector("#mainContainer").innerHTML = view;

        this.form = document.querySelector("#form-sign-up");
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();

            this.criarUsuario();
        });
    }

    async criarUsuario() {
        let nome = document.querySelector("#nome").value;
        let apelido = document.querySelector("#apelido").value;
        let password = document.querySelector("#password").value;
        let email = document.querySelector("#email").value;

        let bodyData = {
            nome:,
            apelido,
            password,
            email
        };

        let resposta = await fetch("http://localhost:3000/users/sign-up", {
            method: "POST",
            body: JSON.stringify(bodyData) 
        });
        let resposta2 = await resposta.json();
        console.log("resposta", resposta2);

        sessionStorage.setItem("token", resposta2.token);
        new HomeController();
    }
}