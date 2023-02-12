/* document.getElementsByTagName("summary").onmousemove = function(){
    let summary = document.getElementsByTagName("summary");
    summary.class = 'superpuesto';
} */
let mostrarMas

document.getElementById('breve').addEventListener('mouseover', function () {
    mostrarMas = document.getElementById("breve");
    mostrarMas.className = 'mostrarMasSubrallado';
});

document.getElementById('terciario').addEventListener('mouseover', function () {
    mostrarMas = document.getElementById("terciario");
    mostrarMas.className = 'mostrarMasSubrallado';
});

document.getElementById('cursos').addEventListener('mouseover', function () {
    mostrarMas = document.getElementById("cursos");
    mostrarMas.className = 'mostrarMasSubrallado';
});

document.getElementById('secundaria').addEventListener('mouseover', function () {
    mostrarMas = document.getElementById("secundaria");
    mostrarMas.className = 'mostrarMasSubrallado';
});

document.getElementById('experienciaNaranja').addEventListener('mouseover', function () {
    mostrarMas = document.getElementById("experienciaNaranja");
    mostrarMas.className = 'mostrarMasSubrallado';
});

document.getElementById('experienciaInfobae').addEventListener('mouseover', function () {
    mostrarMas = document.getElementById("experienciaInfobae");
    mostrarMas.className = 'mostrarMasSubrallado';
});

document.getElementById('breve').addEventListener('mouseleave', function () {
    mostrarMas = document.getElementById("breve");
    mostrarMas.className = 'mostrarMas';
});

document.getElementById('terciario').addEventListener('mouseleave', function () {
    mostrarMas = document.getElementById("terciario");
    mostrarMas.className = 'mostrarMas';
});

document.getElementById('cursos').addEventListener('mouseleave', function () {
    mostrarMas = document.getElementById("cursos");
    mostrarMas.className = 'mostrarMas';
});

document.getElementById('secundaria').addEventListener('mouseleave', function () {
    mostrarMas = document.getElementById("secundaria");
    mostrarMas.className = 'mostrarMas';
});

document.getElementById('experienciaNaranja').addEventListener('mouseleave', function () {
    mostrarMas = document.getElementById("experienciaNaranja");
    mostrarMas.className = 'mostrarMas';
});

document.getElementById('experienciaInfobae').addEventListener('mouseleave', function () {
    mostrarMas = document.getElementById("experienciaInfobae");
    mostrarMas.className = 'mostrarMas';
});

document.getElementById('paginaInfobae').addEventListener('mouseover', function () {
    mostrarMas = document.getElementById("paginaInfobae");
    mostrarMas.className = 'mostrarMasSubrallado';
});


document.getElementById('paginaInfobae').addEventListener('mouseleave', function () {
    mostrarMas = document.getElementById("paginaInfobae");
    mostrarMas.className = 'mostrarMas';
});

document.getElementById('paginaNaranja').addEventListener('mouseover', function () {
    mostrarMas = document.getElementById("paginaNaranja");
    mostrarMas.className = 'mostrarMasSubrallado';
});


document.getElementById('paginaNaranja').addEventListener('mouseleave', function () {
    mostrarMas = document.getElementById("paginaNaranja");
    mostrarMas.className = 'mostrarMas';
});