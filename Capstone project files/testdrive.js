// brand-automator.js

// 1. INJECT CSS
const style = document.createElement('style');
style.innerHTML = `
    #testDriveModal, .custom-modal { display: none; }

    .custom-modal {
        position: fixed; z-index: 99999;
        left: 0; top: 0; width: 100%; height: 100%;
        background-color: rgba(0, 0, 0, 0.85); 
        backdrop-filter: blur(15px);
        justify-content: center; align-items: center;
    }

    .modal-content {
        background: #050a14;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-top: 3px solid var(--accent);
        padding: 50px;
        text-align: center;
        max-width: 450px;
        width: 85%;
        color: white;
        box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    }

    .modal-content h2 {
        font-size: 1.1rem;
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 20px;
        color: var(--accent);
        letter-spacing: 3px;
    }

    .modal-content p {
        font-family: 'Courier New', monospace;
        font-size: 0.9rem;
        line-height: 1.6;
        color: #ccc;
    }

    .close-modal {
        margin-top: 30px;
        padding: 12px 35px;
        cursor: pointer;
        background: transparent;
        color: white;
        border: 1px solid var(--accent);
        font-size: 0.8rem;
        letter-spacing: 2px;
        transition: 0.3s;
        clip-path: polygon(10% 0, 100% 0, 90% 100%, 0% 100%);
    }

    .close-modal:hover {
        background: var(--accent);
        color: white;
        box-shadow: 0 0 15px var(--accent);
    }
`;
document.head.appendChild(style);

// 2. INJECT HTML ELEMENTS
window.addEventListener('DOMContentLoaded', () => {
    if (!document.getElementById('testDriveModal')) {
        const modalHTML = `
            <div id="testDriveModal" class="custom-modal">
                <div class="modal-content">
                    <h2 style="font-family: serif; margin-top:0;">CONTACT INITIATED</h2>
                    <p id="modal-text"></p>
                    <button class="close-modal" onclick="closeModal()">CONFIRM</button>
                </div>
            </div>`;
        document.body.insertAdjacentHTML('afterbegin', modalHTML);
    }

    const dashboard = document.querySelector('.dashboard') || document.querySelector('main');
    if (dashboard && !document.getElementById('mobile-image-wrapper')) {
        const wrapper = document.createElement('div');
        wrapper.id = 'mobile-image-wrapper';
        wrapper.innerHTML = `<img id="mobile-car-img" src="">`;
        dashboard.prepend(wrapper);
    }
});

// 3. LOGIC
function scheduleTestDrive() {
    const car = fleet[currentSelection];
    const modal = document.getElementById('testDriveModal');
    const modalText = document.getElementById('modal-text');
    
    if (modalText) {
        // Human-focused phrasing
        modalText.innerHTML = `Your interest in the <strong>${car.name}</strong> has been logged. The seller will contact you shortly to discuss the details and schedule your viewing.`;
    }
    if (modal) modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('testDriveModal');
    if (modal) modal.style.display = 'none';
}

// Close on background click
window.addEventListener('click', (e) => {
    const modal = document.getElementById('testDriveModal');
    if (e.target === modal) closeModal();
});