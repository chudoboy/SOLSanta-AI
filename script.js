const chatBox = document.getElementById('chatBox');
const inputBox = document.getElementById('inputBox');
const sendButton = document.getElementById('sendButton');

// Predefined responses
const responses = [
    "Thank you so much for your wonderful letter! I’m thrilled to hear your wishes for Christmas. Remember, it’s the thought that counts, and I’ll see what I can do to make your holiday special! \n\nMerry Christmas!\n\nBest,\nSanta",
    "Ho ho ho! Thank you for your festive letter! It warms my heart to hear your Christmas wishes. While I can't promise anything specific, I always love to spread joy and magic during this special season. Keep being good, and who knows what surprises this Christmas will bring! \n\nWishing you a magical holiday season!",
    "What a delightful letter you sent! Thank you for sharing your Christmas wishes with me. I’m always excited to hear from such kind and thoughtful children. While I can’t reveal all my secrets, I promise to do my best to spread joy and happiness this holiday season. Remember to be extra nice, as that always helps!",
    "Thank you for your lovely letter! I’ll do my best to make your Christmas wishes come true. Keep being good! \n\nMerry Christmas!"
];
let responseIndex = 0; // To track which response to send next

// Function to append messages to the chat box
function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    if (sender === 'You') {
        messageElement.classList.add('user-message');
    } else {
        messageElement.classList.add('santa-message');
    }
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Event listener for the send button
sendButton.addEventListener('click', () => {
    const userMessage = inputBox.value.trim();
    if (userMessage) {
        appendMessage('You', userMessage); // Show user's message
        inputBox.value = ''; // Clear input field

        // Add Santa's message after a delay
        setTimeout(() => {
            if (responseIndex < responses.length) {
                appendMessage('Santa', responses[responseIndex]); // Show Santa's response
                responseIndex++; // Move to the next response
            } else {
                appendMessage('Santa', "Santa has no more responses for now. Merry Christmas!"); // Default message
            }
        }, 1000); // 1 second delay
    }
});

// Optional: Allow sending message by pressing Enter
inputBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendButton.click();
    }
});

