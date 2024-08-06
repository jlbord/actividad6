
function checkAnswers() {
    const answers = {
        question1: 'B',
        question2: 'A'
    };

    const feedback = document.getElementById("feedback");
    const form = document.getElementById("quiz-form");

    let correctCount = 0;
    let totalQuestions = Object.keys(answers).length;

    for (const question in answers) {
        const selectedAnswer = form.querySelector(`input[name="${question}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
            correctCount++;
        }
    }

    if (correctCount === totalQuestions) {
        feedback.textContent = "¡Todas las respuestas son correctas!";
    } else if (correctCount > 0) {
        feedback.textContent = `¡Correcto en ${correctCount} de ${totalQuestions} preguntas!`;
    } else {
        feedback.textContent = "Intenta de nuevo.";
    }
}


let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 50;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Avanzar automáticamente las diapositivas
setInterval(nextSlide, 3000);

document.addEventListener('DOMContentLoaded', () => {

    showSlide(currentSlide);
});



// Modificación del DOM después de que la página se haya cargado
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar elementos
    const header = document.querySelector('h1');
    const firstNavLink = document.querySelector('nav ul li a');
    const paragraph = document.querySelector('.container p');
    const image = document.querySelector('img');

    // Modificar contenido y atributos
    header.textContent = '¡Bienvenido a la Plataforma de Seguridad Informática!';
    firstNavLink.textContent = 'Inicio Actualizado';
    paragraph.innerHTML = 'Descubre cómo protegerte en el mundo digital y más allá.';
    image.alt = 'Imagen actualizada de Ciberseguridad';

    // Cambiar estilos
    header.style.color = 'blue';
    image.style.width = '200px';

    // Crear y añadir un nuevo elemento
    const newListItem = document.createElement('li');
    const newLink = document.createElement('a');
    newLink.href = 'newpage.html';
    newLink.textContent = '';
    newListItem.appendChild(newLink);
    const nav = document.querySelector('nav ul');
    nav.appendChild(newListItem);

    // Eliminar el primer elemento de la navegación
    const firstListItem = document.querySelector('nav ul li');
    if (firstListItem) {
        firstListItem.remove();
    }
});