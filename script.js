document.addEventListener('DOMContentLoaded', function () {
    const heuresElement = document.getElementById('heures');
    const minutesElement = document.getElementById('minutes');
    const secondesElement = document.getElementById('secondes');

    const dateFin = new Date('2023-12-31T23:59:59');
    const interval = setInterval(mettreAJourCompteur, 1000);

    function mettreAJourCompteur() {
        const maintenant = new Date();
        const difference = dateFin - maintenant;

        if (difference <= 0) {
            clearInterval(interval);
            heuresElement.textContent = '00';
            minutesElement.textContent = '00';
            secondesElement.textContent = '00';
        } else {
            const heures = Math.floor(difference / 3600000);
            const minutes = Math.floor((difference % 3600000) / 60000);
            const secondes = Math.floor((difference % 60000) / 1000);

            heuresElement.textContent = heures.toString().padStart(2, '0');
            minutesElement.textContent = minutes.toString().padStart(2, '0');
            secondesElement.textContent = secondes.toString().padStart(2, '0');
        }
    }
});
