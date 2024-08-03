document.getElementById('no-button').addEventListener('click', function() {
    const messages = [
        "Pfvr, gatinha",
        "Eu to com saudade",
        "Se você não me desculpar, vou me afogar num copo de cerveja",
        "Já tô ficando sem ideia, gatinha"
    ];
    
    const button = document.getElementById('no-button');
    const container = document.querySelector('.container');
    const messageElement = document.getElementById('message');
    
    const maxWidth = container.clientWidth - button.clientWidth;
    const maxHeight = container.clientHeight - button.clientHeight - messageElement.clientHeight - 20; // Ajuste para evitar sobreposição do texto
    
    const newLeft = Math.floor(Math.random() * maxWidth);
    const newTop = Math.floor(Math.random() * maxHeight);
    
    button.style.position = 'absolute';
    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
    
    let currentMessage = messageElement.innerText;
    let currentIndex = messages.indexOf(currentMessage);
    let nextIndex = (currentIndex + 1) % messages.length;
    
    messageElement.innerText = messages[nextIndex];
});

document.getElementById('yes-button').addEventListener('click', function() {
    const phoneNumber = '5548991440739'; // Substitua com o seu número de telefone no formato internacional
    const message = 'eu te perdoo, meu amor';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.location.href = whatsappURL;
});
