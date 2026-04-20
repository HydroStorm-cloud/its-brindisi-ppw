// --- GESTIONE MODALITÀ LUCE (Toggle iPhone) ---

const toggle = document.getElementById('dark-mode-toggle');

// Controlliamo se l'elemento esiste prima di aggiungere il listener
if (toggle) {
    toggle.addEventListener('change', () => {
        if (toggle.checked) {
            // Se lo switch è su ON, accendiamo la luce
            document.body.classList.add('light');
        } else {
            // Se lo switch è su OFF, torniamo alla modalità scura
            document.body.classList.remove('light');
        }
    });
}

