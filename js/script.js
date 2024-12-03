var prevScrollpos = window.pageYOffset;
var isHidden = false;

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 500) {
        isHidden = true
        if (isHidden == true) {
            document.getElementById("topnav").style.top = "-150px";
        }
    } else {
        document.getElementById("topnav").style.top = "0";
        isHidden = false;
    }

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("topnav").style.top = "0";
        isHidden = false;
    }

    prevScrollpos = currentScrollPos;
};

function backtoTop() {
    document.getElementById("topnav").style.top = "0";
    isHidden = false;
}

// Função para rolar para a seção desejada
function scrollToSection(genshin) {
    const navbarHeight = 60.33; // Altura da barra de navegação
    const section = document.getElementById(genshin);

    if (section) {
        const offsetTop = section.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
            top: offsetTop - navbarHeight,
            behavior: 'smooth' // Isso faz a rolagem ser suave (opcional)
        });
    }
}

// Exemplo de como chamar a função ao clicar em um link de navegação
document.querySelector('#genshin').addEventListener('click', function (e) {
    e.preventDefault(); // Impede o comportamento padrão do link
    scrollToSection('genshin'); // Chama a função para rolar para a seção desejada
});
