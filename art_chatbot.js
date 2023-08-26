var artFacts = [
    "A Mona Lisa de Leonardo da Vinci é uma das pinturas mais famosas do mundo.",
    "A Noite Estrelada de Vincent van Gogh retrata um céu noturno com estrelas giratórias.",
    "O teto da Capela Sistina foi pintado por Michelangelo.",
    "Pablo Picasso co-fundou o movimento cubista.",
    "A estátua de David foi esculpida por Michelangelo e representa o herói bíblico.",
    "A Persistência da Memória é uma famosa pintura surreal de Salvador Dalí.",
    "Jackson Pollock é conhecido por sua técnica única de gotejamento.",
    "A Grande Onda de Kanagawa é uma famosa gravura em madeira de Hokusai.",
    "A Última Ceia, pintada por Leonardo da Vinci, retrata o momento em que Jesus anunciou que um de seus discípulos o trairia.",
    "Andy Warhol é famoso por sua arte pop, incluindo as icônicas latas de sopa Campbell."
];

function getRandomArtFact() {
    var randomIndex = Math.floor(Math.random() * artFacts.length);
    return artFacts[randomIndex];
}

function chatbotResponse(question) {
    if (question.toLowerCase().includes("arte")) {
        return getRandomArtFact();
    } else if (question.toLowerCase().includes("olá") || question.toLowerCase().includes("oi")) {
        return "Olá! Sinta-se à vontade para fazer perguntas sobre arte.";
    } else {
        return "Desculpe, não tenho informações sobre isso.";
    }
}

document.getElementById("searchButton").addEventListener("click", function() {
    var question = document.getElementById("questionInput").value;
    var answerArea = document.getElementById("answerArea");
    answerArea.innerHTML = "Buscando resposta...";

    var response = chatbotResponse(question);

    answerArea.innerHTML = response;
});
