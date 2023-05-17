class TweetView {
    constructor(post) {
        this.post = post;
    }

    template() {
        return `
            <div class="card mb-12">
                <div class="row g-0">
                    <div class="col-md-2">
                        <img src="..." class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-10">
                        <div class="card-body">
                        <h5 class="card-title">Tweet ${this.post.id}</h5>
                        <p class="card-text">${this.post.conteudo}</p>
                        <p class="card-text"><small class="text-body-secondary">Tweet de ${this.post.userId}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}