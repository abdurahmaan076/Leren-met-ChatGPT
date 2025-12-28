// Zoek de knop en het bericht-element in de HTML
const knop = document.getElementById('contactKnop');
const bericht = document.getElementById('contactBericht');

// Voeg een klik-event toe
knop.addEventListener('click', function() {
  bericht.textContent = "Bedankt! We nemen snel contact met je op 😊";
});
