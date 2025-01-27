document.getElementById('cadastroForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const data = Object.fromEntries(formData.entries());
    alert('Cadastro enviado com sucesso! Verifique seu e-mail.');

    console.log('Dados do Cadastro:', data);
    // Aqui você pode integrar com um backend para envio ao e-mail.
});