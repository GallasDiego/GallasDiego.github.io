const questions = [
   { question: "¿que signo sos?", options: ["aire(geminis-libra y acuario)", "fuego(aries-leo y sagitario)", "tierra(tauro- virgo y capricornio)", "nose", "agua(cancer-escorpio y piscis)"] },
    { question: "¿elegia alguien de la farandula argentina" , options: ["darim-soldan", "mago sin dientes ", "ricardo ford ", "lizy tagliani", "susana gimenez "] },
    { question: "¿cual es tu estacion favorita?" ,options: ["invierno", "verano", "primavera ", "todas ", "otoño"] },
    { question: "¿Cuál es tu ambiente ideal?", options: ["Una biblioteca llena de antiguos libros y hechizos", "El campo de batalla defendiendo lo que amo", "Un majestuoso salón de trono", "Una sala de festejos con muchas risas", "Un jardín secreto lleno de paz y belleza"] },
    { question: "¿que grupos de cantantes elegis?", options: ["queen-tan bionica-dillom,coldplay- wos-soda stereo- miloj", "miley cyrus-fito paez-airbag- lali-trueno", "rihanna-travis scott-ysy a-lady gaga- duki-cazzu", "miranda-katy perry-dua lipa-bruno mars-harry style-" ,"taylor swift-conan gray- emlia mernes- olivia rodrigo- one dirreccion-tini"] },
    { question: "¿que comida te gusta mas?", options: ["empanadas ", "milanesa con papafritas", "asado con ensalada", "pizza", "ñoquis con salsa boloñesa "] },
    { question: "¿elegi una pelicula/serie?", options: ["harry potter-doctor stranger", "el señor de los anillos-games of thrones", "the crown-star wars", "son como niños- casados con hijos", "mean girls-bridgerton"] },
    { question: "¿que jugador de la seleccion argentina sos?", options: ["lizandro martinez", "julian alvarez", "messi", "de paul", "otamendi"] },
    { question: "¿que gusto de helado sos?", options: ["crema del cielo-banana split", "dulce de leche-chocolate", "vainilla", "quinostos al wisky", "frutilla-dulce de leche granizado "] },
    { question: "elegi un afrase de la farandula argentina", options: ["es magico", "tres empanadas", "miamiiiii", "dinosaurios vivos!!!!!!", "como te ven te tratan,si te va mal te maltratan y si te ven bien te contratan "] }
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
