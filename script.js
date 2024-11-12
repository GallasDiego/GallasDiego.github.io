const questions = [
    { question: "¿Qué harías si encuentras un reino en problemas?", options: ["Buscaría una solución mágica", "Me ofrecería a proteger a sus habitantes", "Tomaría la responsabilidad de guiar al reino", "Organizaría un evento para animar a la gente", "Ayudaría desde las sombras con astucia y diplomacia"] },
    { question: "¿Qué valoras más en una amistad?", options: ["La lealtad y el compromiso", "El poder de compartir conocimientos", "La sinceridad y la nobleza", "La alegría y la diversión", "La confianza y la empatía"] },
    { question: "Si pudieras elegir un poder especial, ¿cuál sería?", options: ["La sabiduría arcana", "La fuerza inquebrantable", "La capacidad de liderazgo supremo", "La habilidad de hacer reír a todos", "El encanto y la persuasión"] },
    { question: "¿Cuál es tu ambiente ideal?", options: ["Una biblioteca llena de antiguos libros y hechizos", "El campo de batalla defendiendo lo que amo", "Un majestuoso salón de trono", "Una sala de festejos con muchas risas", "Un jardín secreto lleno de paz y belleza"] },
    { question: "¿Qué lema sientes más cercano a ti?", options: ["El conocimiento es poder", "Valor y honor siempre", "Con gran poder viene gran responsabilidad", "La risa es la mejor medicina", "La elegancia en la palabra, la fuerza en la calma"] },
    { question: "¿Cómo reaccionas ante un conflicto?", options: ["Uso la razón y trato de entender todas las perspectivas", "Actúo rápidamente para defender a los inocentes", "Evalúo y tomo la mejor decisión para todos", "Uso el humor para aliviar tensiones", "Intervengo con calma y diplomacia"] },
    { question: "¿Qué tipo de actividad disfrutas más?", options: ["Experimentar y descubrir secretos ocultos", "Entrenar y mejorar mis habilidades", "Tomar decisiones importantes y estratégicas", "Hacer reír y entretener a los demás", "Escuchar y aconsejar con empatía"] },
    { question: "¿Qué preferirías usar en una ocasión especial?", options: ["Una túnica con símbolos místicos", "Una armadura pulida", "Un manto real con emblemas de poder", "Un traje colorido y extravagante", "Un vestido o traje elegante y sobrio"] },
    { question: "¿Qué piensas sobre el destino?", options: ["Es una energía que puedo comprender y guiar", "Creo que el destino favorece a los valientes", "Es mi deber darle forma a través de mis decisiones", "La vida es impredecible, y eso es lo divertido", "Creo en la armonía natural de los acontecimientos"] },
    { question: "¿Cuál sería tu rol en un grupo?", options: ["El sabio y consejero", "El defensor y protector", "El líder que guía a todos", "El que anima y levanta el ánimo", "El que media y mantiene la paz"] }
];

const optionRoles = [
    ["Mago", "Caballero", "Rey", "Bufón", "Dama"],
    ["Caballero", "Mago", "Rey", "Bufón", "Dama"],
    ["Mago", "Caballero", "Rey", "Bufón", "Dama"],
    ["Mago", "Caballero", "Rey", "Bufón", "Dama"],
    ["Mago", "Caballero", "Rey", "Bufón", "Dama"],
    ["Mago", "Caballero", "Rey", "Bufón", "Dama"],
    ["Mago", "Caballero", "Rey", "Bufón", "Dama"],
    ["Mago", "Caballero", "Rey", "Bufón", "Dama"],
    ["Mago", "Caballero", "Rey", "Bufón", "Dama"],
    ["Mago", "Caballero", "Rey", "Bufón", "Dama"]
];

let roleScores = { Mago: 0, Caballero: 0, Rey: 0, Bufón: 0, Dama: 0 };
let userName = "";

function startQuiz() {
    userName = document.getElementById("userName").value;
    if (userName) {
        document.getElementById("start").style.display = "none";
        document.getElementById("quiz").style.display = "block";
        displayQuestion(0);
    } else {
        alert("Por favor, ingresa tu nombre.");
    }
}

function displayQuestion(questionIndex) {
    const question = questions[questionIndex];
    document.getElementById("question").textContent = question.question;
    
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    question.options.forEach((optionText, index) => {
        const button = document.createElement("button");
        button.textContent = optionText;
        button.dataset.role = optionRoles[questionIndex][index];

        button.onclick = function() {
            answerQuestion(button.dataset.role);
            if (questionIndex + 1 < questions.length) {
                displayQuestion(questionIndex + 1);
            } else {
                showResult();
            }
        };
        optionsContainer.appendChild(button);
    });
}

function answerQuestion(selectedRole) {
    roleScores[selectedRole]++;
}

function determineRole() {
    let highestScore = 0;
    let selectedRole = "";
    
    for (let role in roleScores) {
        if (roleScores[role] > highestScore) {
            highestScore = roleScores[role];
            selectedRole = role;
        }
    }
    
    return selectedRole;
}

function showResult() {
    const finalRole = determineRole();
    document.getElementById("quiz").style.display = "none";
    document.getElementById("result").style.display = "block";
    document.getElementById("resultText").textContent = `${userName}, tu rol es: ${finalRole}`;
    
    const roleImage = document.getElementById("roleImage");
    roleImage.src = `img/${finalRole.toLowerCase()}.jpg`;
    roleImage.style.display = "block";
}

displayQuestion(0);
