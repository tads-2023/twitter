class FormTweet {
    template() {
        return `
        <form id="form-tweet">
            <div class="mb-9">
                <label for="conteudo" class="form-label">O que vc está pensando?</label>
                <input type="conteudo" class="form-control" id="conteudo">
            </div>
            <div class="mb-9">
                <label for="imagem" class="form-label">Tem uma foto?</label>
                <input type="file" class="form-control" id="imagem">
            </div>
            <button type="submit" class="btn btn-primary">Criar</button>
        </form>
        `;
    }
}