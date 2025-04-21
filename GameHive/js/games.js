document.addEventListener('DOMContentLoaded', function() {
    const games = [
        {
            title: "Cyber Adventure",
            developer: "Neon Studios",
            rating: 4,
            price: "$9.99",
            thumbnail: "https://via.placeholder.com/300x200/1E1E1E/6C63FF?text=Game+1"
        },
        {
            title: "Pixel Quest",
            developer: "Retro Games",
            rating: 5,
            price: "$7.99", 
            thumbnail: "https://via.placeholder.com/300x200/1E1E1E/6C63FF?text=Game+2"
        }
    ];

    const grid = document.querySelector('.game-grid');
    
    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <img src="${game.thumbnail}" alt="${game.title}" style="width: 100%; height: 150px; object-fit: cover;">
            <div style="padding: 1rem;">
                <h3 style="margin: 0 0 0.5rem 0;">${game.title}</h3>
                <p style="color: #A0A0A0; margin: 0 0 0.5rem 0;">By ${game.developer}</p>
                <div style="color: gold; margin-bottom: 0.5rem;">
                    ${'★'.repeat(game.rating)}${'☆'.repeat(5-game.rating)}
                </div>
                <div style="color: #6C63FF; font-weight: bold;">${game.price}</div>
            </div>
        `;
        grid.appendChild(card);
    });
});