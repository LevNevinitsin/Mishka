const contacts = document.querySelector(".contacts");

if (contacts) {
  map();
}

function map() {
  // Remove map picture
  const contactsMapContainer = document.querySelector(".contacts__map");
  const contactsMapPicture = contactsMapContainer.querySelector("picture");

  contactsMapPicture.remove();

  // Add heading for accessibility
  const contactsList = document.querySelector(".contacts__list");
  const mapHeading = document.createElement("h3");
  mapHeading.classList.add("visually-hidden");
  mapHeading.textContent = "Карта с местоположением магазина на карте по адресу: Санкт-Петербург, ул. Большая Конюшенная 19/8, офис 101."

  contactsList.after(mapHeading);

  // Set size for map container
  contactsMapContainer.classList.add("contacts__map--api");

  // Map script
  const script = document.createElement('script');
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB0a5vYLNnFwIjYWbqVfy3JaaApqK55qrM&callback=initMap';
  script.defer = true;

  document.head.appendChild(script);

  window.initMap = function() {
    const mishkaShop = {lat: 59.93879978424407, lng: 30.3228420342727};
    const mishkaMarker = {lat: 59.93867978424407, lng: 30.3229920342727};
    const map = new google.maps.Map(
      document.querySelector(".contacts__map"), {
        center: mishkaShop,
        zoom: 16.65,
      });
    const image = "img/icon_map_marker.svg"
    const marker = new google.maps.Marker({
      position: mishkaMarker,
      map: map,
      icon: image
    });
  };
}
