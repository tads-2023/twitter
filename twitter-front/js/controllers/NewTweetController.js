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
        let imagem = this.container.querySelector("#imagem").files[0];
        
        const body = new FormData()
        body.append('imagem', imagem)
        body.append('conteudo', conteudo);

        fetch("http://localhost:3000/users/me/posts", {
            method: "POST",
            body: body,
            headers: {
                "token": sessionStorage.getItem("token")
            }
        }).then(() => {
            new Router().irParaHome();
        })
    }
}