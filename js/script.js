// Função que lida com a resposta de login do Google
function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential);
    
    // Salva o nome e o email do usuário no localStorage
    localStorage.setItem("userName", data.name);
    localStorage.setItem("userEmail", data.email);

    // Redireciona para a página de boas-vindas
    window.location.href = "/components/welcome/welcome.html";
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
};

// Verificação de login na página de boas-vindas
document.addEventListener("DOMContentLoaded", function() {
    const userName = localStorage.getItem("userName");

    // Verifica se o usuário está logado, caso contrário redireciona para a página de login
    if (!userName && window.location.pathname.includes("welcome")) {
        window.location.href = "/index.html";
    } else if (userName) {
        // Exibe o nome do usuário na página de boas-vindas
        const welcomeUserName = document.getElementById("welcomeUserName");
        if (welcomeUserName) {
            welcomeUserName.textContent = userName;
        }
    }
});

// Função de logout
function logout() {
    localStorage.clear();
    window.location.href = "/index.html";
}
