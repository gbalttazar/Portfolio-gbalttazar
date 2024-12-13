document.addEventListener("DOMContentLoaded", () => {
    const textoInterativo3 = document.getElementById("texto-interativo-3");
    const frases = [
        "Analista de Sistemas",
        "Desenvolvedor de Sistemas",
        "Analista de Dados",
        "Programador",
        "Desenvolvedor de Software",
        "Desenvolvedor Banco de Dados"
    ];
    let fraseIndex = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;

    function escreverTexto() {
        if (isDeleting) {
            currentText = frases[fraseIndex].substring(0, charIndex - 1);
            charIndex--;
        } else {
            currentText = frases[fraseIndex].substring(0, charIndex + 1);
            charIndex++;
        }

        textoInterativo3.textContent = currentText;

        if (!isDeleting && charIndex === frases[fraseIndex].length) {
            setTimeout(() => {
                isDeleting = true;
            }, 1500);
        } else if (isDeleting && charIndex === 0) {
            fraseIndex = (fraseIndex + 1) % frases.length;
            isDeleting = false;
        }

        setTimeout(escreverTexto, isDeleting ? 100 : 150); // Velocidade de digitação e apagamento
    }

    escreverTexto();
});