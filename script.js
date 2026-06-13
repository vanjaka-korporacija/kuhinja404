function skrolaj(id) {
    const element = document.getElementById(id);
    if (element) {
        // 1. Skrolaj do elementa
        element.scrollIntoView({ behavior: 'smooth' });

        // 2. Makni klasu 'active' sa svih gumba
        document.querySelectorAll('.btn-kategorija').forEach(gumb => {
            gumb.classList.remove('active');
        });

        // 3. Dodaj klasu 'active' na kliknuti gumb
        event.target.classList.add('active');
    }
}