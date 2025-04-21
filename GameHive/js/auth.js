document.getElementById('player-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
    btn.disabled = true;
    
    setTimeout(() => {
        window.location.href = 'home.html';
    }, 1000);
});