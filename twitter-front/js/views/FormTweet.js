class FormTweet {
    template() {
        return `
        <form id="form-tweet">
            <div class="mb-9">
                <label for="conteudo" class="form-label">O que vc está pensando?</label>
                <input type="conteudo" class="form-control" id="conteudo">
            </div>
            <button type="submit" class="btn btn-primary">Criar</button>
        </form>
        `;
    }
}