class SignUpView {
    template() {
        return `
        <form id="form-sign-up">
            <div class="mb-9">
                <label for="nome" class="form-label">Seu nome</label>
                <input type="nome" class="form-control" id="nome">
            </div>
            <div class="mb-9">
                <label for="apelido" class="form-label">Seu apelido</label>
                <input type="apelido" class="form-control" id="apelido">
            </div>
            <div class="mb-9">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email">
            </div>
            <div class="mb-9">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        `; 
    }
}