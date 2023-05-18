class HomeController {
  constructor() {
    this.container = document.querySelector("#mainContainer");
    this.container.innerHTML = new NavView.template();
    document.querySelector("#criarTweet").addEventListener(() => {
      this.irParaCriacaoDeTweet();
    });


    fetch("http://localhost:3000/users/me/posts", {
      headers: {
        "Content-Type": "application/json",
        "token": sessionStorage.getItem("token")
      }
    }).then(async (resposta) => {
      let posts = await resposta.json();
      let view = posts.map((post) => {
        let tweetView = new TweetView(post);
        return tweetView.template();
      });
      document.querySelector("#mainContainer").innerHTML += view.join("");
    });
  }
}