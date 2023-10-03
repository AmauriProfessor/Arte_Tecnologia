function askQuestion() {
    const childName = document.getElementById('childName').value;
    const question = document.getElementById('question').value;
    const answer = document.getElementById('answer');

    // Consulta a API da Wikipedia
    fetch(`https://pt.wikipedia.org/api/rest_v1/page/summary/${question}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao buscar a resposta.');
            }
            return response.json();
        })
        .then(data => {
            // Verifica se a página foi encontrada
            if (data.title) {
                answer.innerHTML = `Olá, ${childName}! Aqui está a resposta para sua pergunta:<br><strong>${data.title}</strong>: ${data.extract}`;
            } else {
                answer.innerHTML = `Desculpe, ${childName}, não consegui encontrar uma resposta para essa pergunta.`;
            }
        })
        .catch(error => {
            answer.innerHTML = `Desculpe, ${childName}, ocorreu um erro ao buscar a resposta: ${error.message}`;
        });
}
