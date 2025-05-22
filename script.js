// Movie Data with Working Image Links (Alternative to TMDB)
const trendingMovies = [
    { 
        title: "Stranger Things", 
        image: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments.",
        youtubeId: "b9EkMc79ZSU"
    },
    { 
        title: "The Witcher", 
        image: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
        description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny.",
        youtubeId: "ndl1W4ltcmg"
    },
    { 
        title: "Money Heist", 
        image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
        description: "An unusual group of robbers attempt to carry out the most perfect robbery.",
        youtubeId: "_InqQJRqGW4"
    },
    { 
        title: "Breaking Bad", 
        image: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg",
        description: "A chemistry teacher diagnosed with cancer turns to manufacturing meth to secure his family's future.",
        youtubeId: "1JLUn2DFW4w"
    },
    { 
        title: "Peaky Blinders", 
        image: "https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_.jpg",
        description: "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby.",
        youtubeId: "PxZ5gGfPtCQ"
    },
    { 
        title: "Dark", 
        image: "https://i.ibb.co/zHNgcznz/Screenshot-from-2025-05-22-20-16-45.png",
        description: "A missing child sets four families on a frantic hunt for answers as they uncover a time travel conspiracy.",
        youtubeId: "ESEUoa-mz2c"
    }
];

const popularMovies = [
    { 
        title: "Squid Game", 
        image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
        description: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games.",
        youtubeId: "oqxAJKy0ii4"
    },
    { 
        title: "The Queen's Gambit", 
        image: "https://i.ibb.co/pjsPMS0F/Screenshot-from-2025-05-22-20-14-56.png",
        description: "Orphaned chess prodigy Beth Harmon struggles with addiction in her quest to become the world's greatest chess player.",
        youtubeId: "4ruX2V5NvGc"
    },
    { 
        title: "Lucifer", 
        image: "https://m.media-amazon.com/images/M/MV5BNDJjMzc4NGYtZmFmNS00YWY3LThjMzQtYzJlNGFkZGRiOWI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        description: "Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell.",
        youtubeId: "ueMwVGBwqRo"
    },
    { 
        title: "The Mandalorian", 
        image: "https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",
        description: "After the fall of the Galactic Empire, a lone gunfighter makes his way through the lawless galaxy.",
        youtubeId: "aOC8E8z_ifw"
    },
    { 
        title: "Bridgerton", 
        image: "https://i.ibb.co/5XYgD6mv/Screenshot-from-2025-05-22-14-57-53.png",
        description: "The eight close-knit siblings of the Bridgerton family look for love and happiness in London high society.",
        youtubeId: "gpv7ayf_tyE"
    },
    { 
        title: "The Crown", 
        image: "https://i.ibb.co/mrsBS90n/Screenshot-from-2025-05-22-15-45-22.png",
        description: "This drama follows the political rivalries and romance of Queen Elizabeth II's reign.",
        youtubeId: "JWtnJjn6ng0"
    }
];

const topRatedMovies = [
    { 
        title: "Game of Thrones", 
        image: "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",
        description: "Nine noble families fight for control over the lands of Westeros.",
        youtubeId: "KPLWWIOCOOQ"
    },
    { 
        title: "The Last of Us", 
        image: "https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
        description: "After a global pandemic destroys civilization, a hardened survivor takes charge of a 14-year-old girl.",
        youtubeId: "uLtkt8BonwM"
    },
    { 
        title: "House of the Dragon", 
        image: "https://image.tmdb.org/t/p/w500/z2yahl2uefxDCl0nogcRBstwruJ.jpg",
        description: "The Targaryen dynasty is at the absolute apex of its power.",
        youtubeId: "DotnJ7tTA34"
    },
    { 
        title: "Wednesday", 
        image: "https://image.tmdb.org/t/p/w500/jeGtaMwGxPmQN5xM4ClnwPQcNQz.jpg",
        description: "Follows Wednesday Addams' years as a student, when she attempts to solve a murder mystery.",
        youtubeId: "Di310WS8zLk"
    },
    { 
        title: "The Boys", 
        image: "https://image.tmdb.org/t/p/w500/stTEycfG9928HYGEISBFaG1ngjM.jpg",
        description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
        youtubeId: "M1bhOaLV4FU"
    },
    { 
        title: "Arcane", 
        image: "https://image.tmdb.org/t/p/w500/fqldf2t8ztc9aiwn3k6mlX3tvRT.jpg",
        description: "Set in Utopian Piltover and the oppressed underground of Zaun, the story follows the origins of two iconic League champions.",
        youtubeId: "fXmAurh012s"
    }
];

// Function to load movies into a row
function loadMovies(movies, rowId) {
    const row = document.getElementById(rowId);
    row.innerHTML = "";

    movies.forEach(movie => {
        const movieCard = document.createElement("div");
        movieCard.className = "col-md-2 movie-card";
        movieCard.innerHTML = `
            <div class="card bg-dark text-white h-100">
                <img src="${movie.image}" alt="${movie.title}" class="card-img-top img-fluid">
                <div class="card-body">
                    <h6 class="card-title" style="color: red;">${movie.title}</h6>
                    <p class="card-text small text-white">${movie.description}</p>
                </div>
                <div class="card-footer bg-transparent border-top-0">
                    <button class="btn btn-sm btn-danger w-100 mb-2 play-btn" 
                            data-youtube-id="${movie.youtubeId}">
                        ▶ Play
                    </button>
                    <button class="btn btn-sm btn-outline-light w-100" style="color: aqua;">
                        Add to Watchlist
                    </button>
                </div>
            </div>
        `;
        row.appendChild(movieCard);
    });

    // Add event listeners to all play buttons
    document.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const youtubeId = this.getAttribute('data-youtube-id');
            playVideo(youtubeId);
        });
    });
}

// Function to play video
function playVideo(youtubeId) {
    const player = document.getElementById('ytPlayer');
    player.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`;
    
    const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));
    videoModal.show();
    
    // Reset video when modal closes
    document.getElementById('videoModal').addEventListener('hidden.bs.modal', function() {
        player.src = '';
    });
}

// Load movies when page loads
document.addEventListener("DOMContentLoaded", () => {
    loadMovies(trendingMovies, "trending");
    loadMovies(popularMovies, "popular");
    loadMovies(topRatedMovies, "top-rated");
});

// Make "Sign In" Button Functional
document.querySelector('.btn-danger')?.addEventListener('click', () => {
    window.location.href = 'signin.html';
});

// Image Error Fallback
document.querySelectorAll('.movie-card img').forEach(img => {
    img.onerror = function() {
        this.src = 'https://via.placeholder.com/300x450/333/999999?text=Poster+Not+Available';
        this.style.objectFit = 'contain';
    };
});

// Universal Loading Screen Control
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if (loader) {
        // Fade out loader
        loader.style.opacity = '0';
        
        // Remove loader after fade completes
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// Create loader dynamically if not present in HTML
function createLoader() {
    if (!document.getElementById('loader')) {
        const loader = document.createElement('div');
        loader.id = 'loader';
        loader.innerHTML = `
            <div class="netflix-loader">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="loading-text">Loading your entertainment</div>
        `;
        document.body.prepend(loader);
    }
}

// Initialize loader on page start
document.addEventListener('DOMContentLoaded', createLoader);


// Search Functionality
function performSearch(query) {
    if (!query.trim()) return;
    
    // Combine all movies for search
    const allMovies = [...trendingMovies, ...popularMovies, ...topRatedMovies];
    const results = allMovies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.description.toLowerCase().includes(query.toLowerCase())
    );
    
    // Create a modal to display search results
    const modalHtml = `
        <div class="modal fade" id="searchModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-scrollable">
                <div class="modal-content bg-dark text-white">
                    <div class="modal-header">
                        <h5 class="modal-title">Search Results for "${query}"</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        ${results.length > 0 ? `
                            <div class="row row-cols-1 row-cols-md-2 g-4">
                                ${results.map(movie => `
                                    <div class="col">
                                        <div class="card bg-dark text-white h-100">
                                            <img src="${movie.image}" class="card-img-top" 
                                                 onerror="this.src='https://via.placeholder.com/300x450/333/999999?text=Poster+Not+Available'">
                                            <div class="card-body">
                                                <h5 class="card-title">${movie.title}</h5>
                                                <p class="card-text small">${movie.description}</p>
                                            </div>
                                            <div class="card-footer bg-transparent border-top-0">
                    <button class="btn btn-sm btn-danger w-100 mb-2 play-btn" 
                            data-youtube-id="${movie.youtubeId}">
                        ▶ Play
                    </button>
                    <button class="btn btn-sm btn-outline-light w-100" style="color: aqua;">
                        Add to Watchlist
                    </button>
                </div>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        ` : `
                            <div class="text-center py-5">
                                <i class="bi bi-search display-1 text-muted"></i>
                                <h4 class="mt-3">No results found</h4>
                                <p>Try different keywords</p>
                            </div>
                        `}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to DOM and show it
    const modalContainer = document.createElement('div');
    modalContainer.innerHTML = modalHtml;
    document.body.appendChild(modalContainer);
    
    const searchModal = new bootstrap.Modal(document.getElementById('searchModal'));
    searchModal.show();
    
    // Remove modal when closed
    document.getElementById('searchModal').addEventListener('hidden.bs.modal', function() {
        modalContainer.remove();
    });
}

// Set up search event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Desktop search
    document.getElementById('searchButton')?.addEventListener('click', function() {
        const query = document.getElementById('searchInput').value;
        performSearch(query);
    });
    
    document.getElementById('searchInput')?.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = document.getElementById('searchInput').value;
            performSearch(query);
        }
    });
    
    // Mobile search
    document.getElementById('mobileSearchButton')?.addEventListener('click', function() {
        const query = document.getElementById('mobileSearchInput').value;
        performSearch(query);
    });
    
    document.getElementById('mobileSearchInput')?.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = document.getElementById('mobileSearchInput').value;
            performSearch(query);
        }
    });
});
