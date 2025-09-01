document.getElementById('send-btn').addEventListener('click', function() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (message !== "") {
        appendMessage(message, 'user');
        input.value = '';

        setTimeout(function() {
            appendMessage("We are processing your query...", 'bot');
        }, 1000);
    }
});

function appendMessage(message, sender) {
    const chatBody = document.querySelector('.chat-body');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.innerHTML = <p>${message}</p><span class="time">${getCurrentTime()}</span>;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return ${hours}:${minutes} ${ampm};
}