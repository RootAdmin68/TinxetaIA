function askQuestion() {
    var userQuestion = document.getElementById('user-input').value.trim();
    if (!userQuestion) return;

    addMessage('user', userQuestion);
    setTimeout(function() {
        generateResponse(userQuestion);
    }, 500);
}

function generateResponse(question) {
    var response;

    question = question.toLowerCase();

    if (question.includes('8*9')) {
        response = '8 * 9 equals 72.';
    } else if (question.includes('quel heure est-il ?')) {
        var now = new Date();
        var heure = now.toLocaleTimeString('fr-FR', {hour: '2-digit', minute:'2-digit'});
        response = 'Il est actuellement ' + heure + ' à Paris.';
    } else if (question.includes("c'est quoi une école ?")) {
        response = 'Une école est une institution où les enfants apprennent et acquièrent des connaissances sous la direction d\'enseignants.';
    } else if (question.includes('salut') || question.includes('bonjour')) {
        response = 'Salut ! Comment puis-je vous aider ?';
    } else if (question.includes('merci')) {
        response = 'De rien ! N\'hésitez pas si vous avez d\'autres questions.';
    } else if (question.includes('quel âge as-tu')) {
        response = 'Je suis une IA, donc je n\'ai pas d\'âge.';
    } else if (question.includes('qui ta crée')) {
        response = 'Mon créateur est Augustin Vonesch, un jeune de 13 ans passionné d\'informatique qui voudrait en faire un métier, voire plus...';
    } else if (question.includes('quel est ton nom')) {
        response = 'Je me nomme Tinxeta.';
    } else if (question.includes("Es tu encores en developpement ?")) {
        response = "Oui, je suis encore en developpement";

    } else if (question.includes("c'est quand ton anniversaire")) {
        response = 'Je suis une intelligence artificielle, je n\'ai pas d\'anniversaire.';
    } else if (question.includes('quelle est la capitale de la France')) {
        response = 'La capitale de la France est Paris.';
    } else if (question.includes("quel est la taille de ma bite ?")) {
        response = "Je ne répondrais pas à cette question  ";
    } else if (question.includes("c'est quoi la tristesse ?")) {
        response = "La tristesse est une émotion humaine qui se déclanche quand on resent quelque chose d'émouvant...";
    } else if (question.includes('combien de continents y a-t-il')) {
        response = 'Il y a sept continents sur Terre : l\'Afrique, l\'Antarctique, l\'Asie, l\'Europe, l\'Amérique du Nord, l\'Amérique du Sud et l\'Océanie.';
    } else if (question.includes('quelle est la couleur du ciel')) {
        response = 'La couleur du ciel peut varier, mais généralement, elle est bleue en raison de la diffusion de la lumière par les particules dans l\'atmosphère.';
    } else if (question.includes('comment fonctionne un moteur à combustion')) {
        response = 'Un moteur à combustion interne fonctionne en brûlant un mélange de carburant et d\'air à l\'intérieur d\'un cylindre pour produire de l\'énergie mécanique.';
    } else if (question.includes('quelles sont les langues les plus parlées dans le monde')) {
        response = 'Les langues les plus parlées dans le monde sont le chinois mandarin, l\'espagnol, l\'anglais et l\'hindi.';
    } else if (question.includes('+')) {
        var numbers = question.split('+').map(Number);
        if (numbers.length === 2 && !isNaN(numbers[0]) && !isNaN(numbers[1])) {
            response = 'Le résultat de l\'addition est : ' + (numbers[0] + numbers[1]);
        } else {
            response = 'Je suis désolé, veuillez saisir deux nombres à additionner.';
        }
    } else if (question.includes('-')) {
        var numbers = question.split('-').map(Number);
        if (numbers.length === 2 && !isNaN(numbers[0]) && !isNaN(numbers[1])) {
            response = 'Le résultat de la soustraction est : ' + (numbers[0] - numbers[1]);
        } else {
            response = 'Je suis désolé, veuillez saisir deux nombres à soustraire.';
        }
    } else {
        // Si la question ne correspond à aucune fonctionnalité spécifique, afficher un message par défaut
        response = 'Désolé, je ne peux pas répondre à cette question pour le moment.';
    }

    addMessage('bot', response);
}

function addMessage(sender, message) {
    var chatBox = document.getElementById('chat-box');
    var newMessage = document.createElement('div');
    newMessage.classList.add(sender);
    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
}



