function handleCredentialResponse(response) {
    if (response.credential) {
        // Decodifica o token JWT e obtém os dados do usuário
        const data = jwt_decode(response.credential);

        // Armazena nome e email no localStorage
        localStorage.setItem("userName", data.name);
        localStorage.setItem("userEmail", data.email);

        // Redireciona para a página de boas-vindas
        window.location.href = "components/welcome/welcome.html";
    } else {
        console.error("Falha ao obter credenciais do usuário.");
    }
}

window.onload = function () {
    google.accounts.id.initialize({
        client_id: "951786051895-f4b9l4o997pefvfeg48sdt9df5ev53ei.apps.googleusercontent.com",  // Substitua pelo seu client_id
        callback: handleCredentialResponse
    });

    // Renderiza o botão de login do Google
    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // Personalização do botão
    );

    // Exibe o diálogo One Tap (opcional)
    google.accounts.id.prompt();
}
