const usuarioCorrecto = "cami"
const passwordCorrecto = "1234"

function login() {

    const usuario = document.getElementById("usuario").value
    const password = document.getElementById("password").value

    if (usuario === usuarioCorrecto && password === passwordCorrecto) {

        localStorage.setItem("sesion", "activa")
        window.location.href = "panel.html"

    } else {

        document.getElementById("error").innerText = "Usuario o contraseña incorrectos"

    }

}

function logout() {

    localStorage.removeItem("sesion")
    window.location.href = "index.html"

}

if (window.location.pathname.includes("panel.html")) {

    const sesion = localStorage.getItem("sesion")

    if (!sesion) {

        window.location.href = "index.html"

    }

}