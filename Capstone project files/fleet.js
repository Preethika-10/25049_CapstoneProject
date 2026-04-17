function addToFleet(carName, price, image) {
    // 1. Get existing data from 'userFleet'
    let fleet = JSON.parse(localStorage.getItem('userFleet')) || [];
    
    // 2. Add the new car
    const newCar = {
        id: Date.now(),
        name: carName,
        price: price,
        img: image
    };
    
    fleet.push(newCar);
    
    // 3. Save it back to 'userFleet'
    localStorage.setItem('userFleet', JSON.stringify(fleet));
    
    alert(carName + " added to your garage!");
    updateNavbar(); // Refresh the count
}