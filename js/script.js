
function handleCredentialResponse(response) {
    const data = jwt_decode(response.credential);
    
    localStorage.setItem("userName", data.name);

    // Redireciona para a página de boas-vindas
    window.location.href = "https://immark007.github.io/login-seno/components/welcome/welcome.html";
}


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

    const userName = localStorage.getItem("userName");
    if (userName) {
        
        window.location.href = "https://immark007.github.io/login-seno/components/welcome/welcome.html";
    }
};


document.addEventListener("DOMContentLoaded", function() {
    const userName = localStorage.getItem("userName");

    if (userName) {
        document.getElementById("userName").textContent = userName;
    } else if (window.location.pathname.includes("welcome")) {
        
        window.location.href = "https://immark007.github.io/login-seno/";
    }
});


function logout() {
    localStorage.clear();
    window.location.href = "https://immark007.github.io/login-seno/";
}
