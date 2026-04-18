function updateView(index, el) { 
    currentSelection = index;
    
    // 1. Keep the Glowing/Active logic
    document.querySelectorAll('.car-option').forEach(opt => opt.classList.remove('active')); 
    if(el) el.classList.add('active'); 

    const car = fleet[index]; 

    // 2. Update the Desktop Image
    const desktopImg = document.getElementById('car-img');
    if(desktopImg) desktopImg.src = car.img; 

    // 3. Update the Mobile Image (The new logic)
    const mobileImg = document.getElementById('mobile-car-img');
    if(mobileImg) mobileImg.src = car.img;

    // 4. Update the Details Area (Keep your exact HTML structure)
    document.getElementById('details').innerHTML = `
        <h2 class="car-main-title">${car.name}</h2>
        <div class="price-section">
            <span class="full-price-tag">${car.fullPrice}</span>
            <span class="monthly-tag">${car.monthly}</span>
        </div>
        <div class="action-buttons">
            <button class="reserve-btn" onclick="reserveCar()">Book Now</button>
            <button class="test-drive-btn" onclick="scheduleTestDrive()">Test Drive</button>
        </div>
        <div class="spec-grid">
            <div class="spec-item">
                <p class="spec-label">Peak Power</p>
                <p class="spec-value">${car.power}</p>
            </div>
            <div class="spec-item">
                <p class="spec-label">Acceleration</p>
                <p class="spec-value">${car.acc}</p>
            </div>
            <div class="spec-item">
                <p class="spec-label">Est. Range</p>
                <p class="spec-value">${car.range}</p>
            </div>
            <div class="spec-item">
                <p class="spec-label">Drivetrain</p>
                <p class="spec-value">${car.drive}</p>
            </div>
            <div class="spec-item">
                <p class="spec-label">Top Speed</p>
                <p class="spec-value">Grand Tourer</p>
            </div>
            <div class="spec-item">
                <p class="spec-label">Warranty</p>
                <p class="spec-value">3yr / Unlimited</p> 
            </div>
        </div>
    `;
}