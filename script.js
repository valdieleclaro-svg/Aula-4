const botoes = document.querySelectorAll(".btn-like");

botoes.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", function () {
        let texto = botao.querySelector("span");
        let contador = parseInt(texto.textContent, 10);

        if (!curtiu) {
            texto.textContent = contador + 1;
            curtiu = true;
            botao.classList.add("curtido");
        } else {
            texto.textContent = contador - 1;
            curtiu = false;
            botao.classList.remove("curtido");
        }
    });
});
