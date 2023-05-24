class Router {
    constructor() {
        this.rotas = {
            home: {
                path: "/home",
                controller: "HomeController",
            },
            criarTweet: {
                path: "/tweet/new",
                controller: "NewTweetController"
            }
        };
    }
    
    irParaHome() {
        this.irPara(this.rotas.home)
    }
    irParaCriarTweet() {
        this.irPara(this.rotas.criarTweet)
    }
    irPara(rota) {
        history.pushState({}, "", rota.path);
        eval(`new ${rota.controller}();`)
    }   

}