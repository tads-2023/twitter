class HomeController {
  constructor() {
    this.init();
  }

  init() {
    this.container = document.querySelector("#mainContainer");
    this.container.innerHTML = new NavView().template();
    fetch("http://localhost:3000/posts", {
      headers: {
        "Content-Type": "application/json",
        "token": sessionStorage.getItem("token")
      }
    }).then((resposta) => {
      return resposta.json()
    }).then( (posts) => {
      let view = posts.map((post) => {
        let tweetView = new TweetView(post);
        return tweetView.template();
      });
      this.container.innerHTML += view.join("");
      this.bind()
    })
  }

  irParaCriacaoDeTweet() {
    new Router().irParaCriarTweet();
  }

  async followUser(userId) {
    await fetch(`http://localhost:3000/users/${userId}/follow`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "token": sessionStorage.getItem("token")
      }
    });
    this.init();
  }

  bind() {
    document.querySelector("#criarTweet").addEventListener("click", () => {
      this.irParaCriacaoDeTweet();
    });

    document.querySelectorAll(".follow").forEach((button) => {
      button.addEventListener("click", (e) => {
        let userId = e.target.dataset.userId;
        this.followUser(userId);
      })   
    })
  }
}