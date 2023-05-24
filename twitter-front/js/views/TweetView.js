class TweetView {
    constructor(post) {
        this.post = post;
    }

    template() {
        let button = "";
        if(this.post.following) {
            button = `<p class="card-text"><small class="text-body-secondary">Tweet de ${this.post.userId}<button data-user-id="${this.post.userId}" class="unfollow">Unfollow</button></small></p>`
        } else {
            button = `<p class="card-text"><small class="text-body-secondary">Tweet de ${this.post.userId}<button data-user-id="${this.post.userId}" class="follow">Follow</button></small></p>`
        }

        return `
            <div class="card mb-12">
                <div class="row g-0">
                    <div class="col-md-2">
                        <img src="..." class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-10">
                        <div class="card-body">
                        <h5 class="card-title">Tweet ${this.post._id}</h5>
                        <p class="card-text">${this.post.conteudo}</p>
                        ${button}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}