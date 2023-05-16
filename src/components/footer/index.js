import React from "react";


function Footer() {
    return (
        <footer>

        <img style="object-fit: contain;" id="logo" src="imagens/BM_6fZMFMm.webp"/>
        <span>Todos os direitos reservados ©</span>
        <span>Desenvolvido por: Elson Xavier</span>

        <nav class="footer-navigation">
            <ul class="footer-list">
                <a href="index.html">
                    <li>Home</li>
                </a>

                <a href="contatos.html">
                    <li>Contatos</li>
                </a>

                <a href="fotos.html">
                    <li>Fotos</li>
                </a>

                <a href="comentarios.html">
                    <li>Comentários</li>
                </a>

            </ul>
        </nav>

    </footer>


    )
}

export default Footer;