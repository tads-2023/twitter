class NewTweetController {
    constructor() {
        this.container = document.querySelector("#mainContainer");
        let view = new FormTweet().template();
        this.container.innerHTML = view;
        this.container.querySelector("#form-tweet").addEventListener("submit", (e) => {
            e.preventDefault();
            this.cadastrarTweet();
        })
    }

    cadastrarTweet() {
        let conteudo = this.container.querySelector("#conteudo").value;

        fetch("http://localhost:3000/users/me/posts", {
            method: "POST",
            body: JSON.stringify({conteudo}),
            headers: {
                "Content-Type": "application/json",
                "token": sessionStorage.getItem("token")
            }
        }).then(() => {
            new Router().irParaHome();
        })
    }
}