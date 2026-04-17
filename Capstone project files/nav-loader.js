document.addEventListener("DOMContentLoaded", () => { 
    const header = document.querySelector("header"); 
    if (header) { 
        header.innerHTML = ` 
            <div class="menu-toggle" onclick="toggleMenu()" style="display: none; flex-direction: column; gap: 5px; cursor: pointer; position: absolute; left: 20px;">
                <span style="width: 25px; height: 2px; background: white;"></span>
                <span style="width: 25px; height: 2px; background: white;"></span>
                <span style="width: 25px; height: 2px; background: white;"></span>
            </div>
            <nav class="nav-links" style="position: absolute; left: 30px; display: flex; gap: 20px;"> 
                <a href="cpp.html" class="nav-item">Home</a> 
                <a href="about.html" class="nav-item">About</a> 
            </nav> 
            <div class="title-group" style="text-align: center; flex: 1;"> 
                <a href="cpp.html" style="text-decoration: none;"> 
                    <h1 style="font-size: 1.8rem; letter-spacing: 8px; text-transform: uppercase; margin: 0; background: linear-gradient(to right, #fff, #666); -webkit-background-clip: text; -webkit-text-fill-color: transparent; cursor: pointer;">Drift Deck</h1> 
                </a> 
                <div class="subtitle" style="color: #444; font-size: 0.6rem; letter-spacing: 3px; text-transform: uppercase;">Premium Electric Showroom</div> 
            </div> 
            <nav class="nav-right" style="position: absolute; right: 30px;"> 
                <a href="garage.html" class="nav-item">Garage</a> 
            </nav> 
            <div id="mobileMenu" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); backdrop-filter: blur(15px); z-index: 9999; flex-direction: column; justify-content: center; align-items: center;">
                <div onclick="toggleMenu()" style="position: absolute; top: 20px; right: 30px; font-size: 3rem; color: white; cursor: pointer;">&times;</div>
                <nav style="display: flex; flex-direction: column; gap: 30px; text-align: center;">
                    <a href="cpp.html" style="color: white; text-decoration: none; font-size: 2rem; font-weight: 700; text-transform: uppercase;">Home</a>
                    <a href="global.html" style="color: white; text-decoration: none; font-size: 2rem; font-weight: 700; text-transform: uppercase;">Sports Cars</a>
                    <a href="about.html" style="color: white; text-decoration: none; font-size: 2rem; font-weight: 700; text-transform: uppercase;">About</a>
                    <a href="garage.html" style="color: white; text-decoration: none; font-size: 2rem; font-weight: 700; text-transform: uppercase;">Garage</a>
                </nav>
            </div>
        `; 
    }
});

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        document.body.style.overflow = 'auto';
    } else {
        menu.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}