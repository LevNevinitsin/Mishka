// Скрипт по работе с картой

// Убираем картинку карты, меняем её на доступно скрытый заголовок
// (цель: если JS не загрузится, карта будет как контент в разметке, а не просто как фон в стилях).

const contactsMapContainer = document.querySelector(".contacts__map");
const contactsMapPicture = contactsMapContainer.querySelector("picture");
const contactsList = document.querySelector(".contacts__list");

contactsMapPicture.remove();

const mapHeading = document.createElement("h3");
mapHeading.classList.add("visually-hidden");
mapHeading.textContent = "Карта с местоположением магазина на карте по адресу: Санкт-Петербург, ул. Большая Конюшенная 19/8, офис 101."

contactsList.after(mapHeading);

// Чтобы задать размеры элементу с картой, добавляем ему класс-модификатор.

contactsMapContainer.classList.add("contacts__map--api");

// Сама карта

let script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB0a5vYLNnFwIjYWbqVfy3JaaApqK55qrM&callback=initMap';
script.defer = true;

document.head.appendChild(script);

window.initMap = function() {
  let mishkaShop = {lat: 59.93879978424407, lng: 30.3228420342727};
  let mishkaMarker = {lat: 59.93867978424407, lng: 30.3229920342727};
  let map = new google.maps.Map(
    document.querySelector(".contacts__map"), {
      center: mishkaShop,
      zoom: 16.65,
    });
  const image = "../img/icon_map_marker.svg"
  let marker = new google.maps.Marker({
    position: mishkaMarker,
    map: map,
    icon: image
  });
};
