window.addEventListener('message', (event) => {
    const data = event.data;
    
    if (data.type === 'showNotification') {
        createNotification(data.playerName, data.notificationType);
    }
});

function createNotification(playerName, type) {
    const container = document.getElementById('notification-container');
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    
    const icon = type === 'join' ? '\u{1F44B}' : '\u{1F6AA}';
    const title = type === 'join' ? 'Connected' : 'Disconnected';
    const badge = type === 'join' ? 'Join' : 'Left';
    
    notification.innerHTML = `
        <div class="notification-icon">${icon}</div>
        <div class="notification-content">
            <div class="notification-title">${title}</div>
            <div class="notification-message">${playerName}</div>
        </div>
        <div class="notification-badge ${type}">${badge}</div>
    `;
    
    container.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('hiding');
        setTimeout(() => {
            notification.remove();
        }, 200);
    }, 4000);
}