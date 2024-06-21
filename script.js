const shortenBtn = document.getElementById('shorten-btn');
const urlInput = document.getElementById('url-input');
const resultContainer = document.getElementById('result-container');
const shortenedUrlElement = document.getElementById('shortened-url');

shortenBtn.addEventListener('click', async () => {
    const url = urlInput.value.trim();
    if (url) {
        try {
            const response = await fetch('/api/shorten', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ url })
            });
            const data = await response.json();
            const shortenedUrl = `https://ovhkulu.cc/${data.shortCode}`;
            shortenedUrlElement.textContent = shortenedUrl;
            resultContainer.style.display = 'block';
        } catch (error) {
            console.error(error);
        }
    }
});
