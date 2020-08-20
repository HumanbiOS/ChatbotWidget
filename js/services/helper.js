export function numberToPixel(number) {
  return number + 'px';
}

export function aplyStylesToElement(style, domElement) {
  for (const [key, value] of Object.entries(style)) {
    if (key == 'mediaQuery') {
      const mediaQuery = window.matchMedia(value.query);
      mediaQuery.addListener((x) => {
        if (x.matches) {
          aplyStylesToElement(value.style, domElement);
        } else {
          console.log('intersect', intersect(style, value.style));
          aplyStylesToElement(intersect(style, value.style), domElement);
        }
      });
      if (mediaQuery.matches) {
        aplyStylesToElement(value.style, domElement);
      }
    }
    domElement.style[key] = value;
  }
}

//TODO Performance
function intersect(object1, object2) {
  const intersection = {};
  const entries = Object.entries(object1).filter(
    (entry) => entry[0] in object2
  );
  entries.forEach((entry) => (intersection[entry[0]] = entry[1]));
  return intersection;
}

export function addStylesheet(fileName) {
  var head = document.head;
  var link = document.createElement('link');

  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = fileName;

  head.prepend(link);
}

export function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
