document.addEventListener("DOMContentLoaded", function() {
    let mostPlayedGame = {
        name: "Black Myth: Wukong",
        img: "https://cdn.i.haymarketmedia.asia/?n=campaign-asia%2Fcontent%2FHero+image.jpg&h=630&w=1200&q=75&v=20170226&c=1",
        link: "https://example.com/game-x"
    };

    let bestGameOfWeek = {
        name: "Minecraft",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLpJNx7OBqe-AZaSnCWKbLNurMRZsOowsjCg&s",
        link: "https://example.com/game-y"
    };

    let categories = {
        arcade: [
            { name: "Pac-Man", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEFIEpqA3mX4utVyoJ6MoSzuhsF9sofhi0Q&s" },
            { name: "Tetris", img: "https://m.media-amazon.com/images/I/61M3rDwh4qL.png" }
        ],
        instantPlay: [
            { name: "Subway Surfers", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMsxrdruE5diXUDIXd_xToprbjcSJObK-IA&s" },
            { name: "Flappy Bird", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2oHRpnEfGoRewh_guUz8Qw4Kw_ZipayMKqslL-HAmoLhqA7s5KuPVSiK-1UAHw6YKRR0&usqp=CAU" }
        ],
        multiplayer: [
            { name: "Among Us", img: "https://wallpapers.com/images/featured/among-us-pictures-ufr7q747qruthqf6.jpg" },
            { name: "Call of Duty", img: "https://wallpapers.com/images/featured/call-of-duty-pictures-7lrqnchbx478ucgg.jpg" }
        ],
        strategy: [
            { name: "Clash of Clans", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcEjE9jjpERAeMfX7sS7dAORo2U4TyXr1IeA&s" },
            { name: "Age of Empires", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj9vPgIrbYQlakK0u6YGfSJpfcYjDhK4nsEA&s" }
        ]
    };

    function insertGame(containerId, games) {
        let container = document.getElementById(containerId);
        games.forEach(game => {
            let gameCard = document.createElement("div");
            gameCard.classList.add("game-card");
            gameCard.innerHTML = `<img src="${game.img}" alt="${game.name}"><h3>${game.name}</h3><button>Play</button>`;
            container.appendChild(gameCard);
        });
    }

    document.getElementById("mostPlayedGame").innerHTML = `<img src="${mostPlayedGame.img}" alt="${mostPlayedGame.name}"><h3>${mostPlayedGame.name}</h3>`;
    document.getElementById("bestGameOfWeek").innerHTML = `<img src="${bestGameOfWeek.img}" alt="${bestGameOfWeek.name}"><h3>${bestGameOfWeek.name}</h3>`;

    insertGame("arcadeGames", categories.arcade);
    insertGame("instantPlay", categories.instantPlay);
    insertGame("multiplayerGames", categories.multiplayer);
    insertGame("strategyGames", categories.strategy);
});

/* Toggle Mobile Navigation */
function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}
