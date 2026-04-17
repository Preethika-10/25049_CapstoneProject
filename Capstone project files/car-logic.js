// This function builds the accordion using whatever 'fleet' data is on the page
function renderList() {
    const listContainer = document.getElementById('list');
    if (!listContainer || !fleet) return;

    listContainer.innerHTML = fleet.map((car, i) => `
        <div class="car-accordion-item" id="item-${i}">
            <div class="car-header" onclick="toggleCar(${i})">
                <span>${car.name}</span>
                <span style="font-size: 0.9rem; color: #888;">${car.rent}/Day</span>
            </div>
            
            <div class="car-content">
                <div class="spec-grid">
                    <div class="spec-item"><span class="spec-label">Transmission</span><span class="spec-value">${car.specs.trans}</span></div>
                    <div class="spec-item"><span class="spec-label">Fuel Type</span><span class="spec-value">${car.specs.fuel}</span></div>
                    <div class="spec-item"><span class="spec-label">Power Output</span><span class="spec-value">${car.power}</span></div>
                    <div class="spec-item"><span class="spec-label">0-60 MPH</span><span class="spec-value">${car.acc}</span></div>
                    <div class="spec-item"><span class="spec-label">Mfg. Year</span><span class="spec-value">${car.specs.year}</span></div>
                    <div class="spec-item"><span class="spec-label">City</span><span class="spec-value">${car.specs.city}</span></div>
                </div>
                <button class="reserve-btn" onclick="addTogarage(${i})">Reserve This Vehicle</button>
            </div>
        </div>
    `).join('');
}

let currentSelection = 0;

function toggleCar(index) {
    const items = document.querySelectorAll('.car-accordion-item');
    const clickedItem = document.getElementById(`item-${index}`);
    
    items.forEach(item => item.classList.remove('active'));
    clickedItem.classList.add('active');

    currentSelection = index;
    document.getElementById('car-img').src = fleet[index].img;
}

function addTogarage(index) {
    const car = fleet[index];
    let garage = JSON.parse(localStorage.getItem('driftDeckgarage')) || [];
    garage.push(car);
    localStorage.setItem('driftDeckgarage', JSON.stringify(garage));
    alert(`${car.name} added to garage!`);
}