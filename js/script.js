// Função que lida com a resposta de login do Google
function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential);
    
    // Salva o nome e o email do usuário no localStorage
    localStorage.setItem("userName", data.name);
    localStorage.setItem("userEmail", data.email);

    // Redireciona para a página de boas-vindas
    window.location.href = "https://immark007.github.io/login-seno/components/welcome/welcome.html";
}

// Inicializa o login do Google quando a página carrega
window.onload = function () {
    google.accounts.id.initialize({
        client_id: "951786051895-f4b9l4o997pefvfeg48sdt9df5ev53ei.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }
    );
    google.accounts.id.prompt();

    // Verificação de login na página inicial
    const userName = localStorage.getItem("userName");
    if (userName) {
        // Redireciona para a página de boas-vindas se já estiver logado
        window.location.href = "https://immark007.github.io/login-seno/components/welcome/welcome.html";
    }
};

// Exibição do nome e e-mail na página de boas-vindas
document.addEventListener("DOMContentLoaded", function() {
    const userName = localStorage.getItem("userName");
    const userEmail = localStorage.getItem("userEmail");

    if (userName && userEmail) {
        document.getElementById("userName").textContent = userName;
        document.getElementById("userEmail").textContent = userEmail;
    } else if (window.location.pathname.includes("welcome")) {
        // Redireciona para a página de login se não estiver logado
        window.location.href = "https://immark007.github.io/login-seno/";
    }
});

// Função de logout
function logout() {
    localStorage.clear();
    window.location.href = "https://immark007.github.io/login-seno/";
}
