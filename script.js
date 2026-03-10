// script.js

// Function to fetch AI history from external source
async function fetchAIHistory() {
    try {
        const response = await fetch('https://api.example.com/ai-history');
        const data = await response.json();
        displayAIHistory(data);
    } catch (error) {
        console.error('Error fetching AI history:', error);
    }
}

// Function to display AI history
function displayAIHistory(data) {
    const historyContainer = document.getElementById('ai-history');
    historyContainer.innerHTML = '';
    data.forEach(item => {
        const historyItem = document.createElement('div');
        historyItem.classList.add('history-item');
        historyItem.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
        historyContainer.appendChild(historyItem);
    });
}

// Fetch and display AI history on page load
document.addEventListener('DOMContentLoaded', fetchAIHistory);