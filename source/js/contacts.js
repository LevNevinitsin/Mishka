const contacts = document.querySelector('.contacts');

const FAKE_MAP_SELECTOR = '.contacts__fake-map';

const MAP_CONTAINER_ID = 'map';
const CENTER_LAT = 59.93879978424407;
const CENTER_LNG = 30.3228420342727;
const MARKER_LAT = 59.93867978424407;
const MARKER_LNG = 30.3229920342727;
const ZOOM = 16;
const MARKER_ICON_PATH = 'img/icon_map_marker.svg';

if (contacts) {
  map();
}

function map () {
  const fakeMapElement = document.querySelector(FAKE_MAP_SELECTOR);

  ymaps.ready(init);

  function init() {
    fakeMapElement.remove();

    const myMap = new ymaps.Map(MAP_CONTAINER_ID, {
      center: [CENTER_LAT, CENTER_LNG],
      zoom: ZOOM,
    });

    const marker = new ymaps.Placemark([MARKER_LAT, MARKER_LNG], {
      hintContent: 'qqq',
      balloonContent: 'www'
    }, {
        iconLayout: 'default#image',
        iconImageHref: MARKER_ICON_PATH,
        iconImageSize: [67, 101],
        iconImageOffset: [-23, -101]
    });

    myMap.geoObjects.add(marker);
  }
}
