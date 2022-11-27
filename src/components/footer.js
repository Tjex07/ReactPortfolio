import React from "react";
import '../css/footer.css';

function Footer() {
    return (
    <div id="footer">
        <h3>find me at</h3>
        <a href="https://www.linkedin.com/in/https://www.linkedin.com/in/trevor-jex-aa703b82/" target="_blank" class="footerContact">
        <i class="fab fa-linkedin"></i>
        <h5>Trevor Jex @ linkedin</h5>
        </a>
        <a href="https://github.com/tjex07" target="_blank" class="footerContact">
        <i class="fab fa-github"></i>
        <h5>Tjex07 @ github</h5>
        </a>
        <a href="mailto:tjex07@hotmail.com" class="footerContact">
        <i class="fas fa-envelope-square"></i>
        <h5>tjex07@hotmail.com</h5>
        </a>
    </div>
    );
}

export default Footer;