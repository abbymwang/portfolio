/*
  Photo gallery loader.

  PHOTOS lists every portfolio image in filename order with its display
  orientation: portrait (2:3), landscape (3:2), wide (7:3), panoramic (9:2).
  Orientation drives grid-column span (4 / 3 / 2 / 1 per row).

  All images are rendered at once — the gallery scrolls internally so the
  browser never sees them as "off-screen," making native lazy loading
  unreliable. With 38 images this is fast enough to load eagerly.
*/

(function () {
  const grid = document.querySelector('.photo-grid');
  if (!grid) return;

  const PHOTOS = [
    { file: '01.jpeg',  cls: 'portrait'  },
    { file: '02.jpg',   cls: 'landscape' },
    { file: '03.jpg',   cls: 'portrait'  },
    { file: '04.jpg',   cls: 'portrait'  },
    { file: '05.jpg',   cls: 'portrait'  },
    { file: '06.png',   cls: 'portrait'  },
    { file: '07.jpeg',  cls: 'landscape' },
    { file: '08.jpeg',  cls: 'portrait',  url: 'https://www.therubinlab.org/' },
    { file: '09.png',   cls: 'landscape', url: 'https://www.therubinlab.org/' },
    { file: '010.png',  cls: 'landscape' },
    { file: '011.jpg',  cls: 'landscape' },
    { file: '012.png',  cls: 'landscape' },
    { file: '013.jpg',  cls: 'landscape' },
    { file: '014.jpeg', cls: 'landscape' },
    { file: '015.jpg',  cls: 'landscape' },
    { file: '016.jpg',  cls: 'landscape' },
    { file: '017.jpg',  cls: 'landscape' },
    { file: '018.png',  cls: 'portrait'  },
    { file: '019.png',  cls: 'portrait'  },
    { file: '020.jpg',  cls: 'landscape' },
    { file: '021.png',  cls: 'portrait'  },
    { file: '022.png',  cls: 'portrait'  },
    { file: '023.jpg',  cls: 'landscape' },
    { file: '024.png',  cls: 'wide'      },
    { file: '025.png',  cls: 'portrait'  },
    { file: '026.jpg',  cls: 'landscape' },
    { file: '027.png',  cls: 'landscape' },
    { file: '028.jpg',  cls: 'landscape' },
    { file: '029.png',  cls: 'portrait'  },
    { file: '030.png',  cls: 'landscape' },
    { file: '031.jpg',  cls: 'landscape' },
    { file: '032.png',  cls: 'landscape' },
    { file: '033.png',  cls: 'portrait'  },
    { file: '034.jpg',  cls: 'landscape' },
    { file: '035.jpg',  cls: 'portrait'  },
    { file: '036.png',  cls: 'portrait'  },
    { file: '037.png',  cls: 'portrait'  },
    { file: '038.png',  cls: 'portrait'  },
  ];

  const fragment = document.createDocumentFragment();
  PHOTOS.forEach(({ file, cls, url }) => {
    const item = document.createElement('div');
    item.className = 'photo-item ' + cls;
    const img = document.createElement('img');
    img.src = 'images/portfolio/' + file;
    img.alt = '';
    if (url) {
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.appendChild(img);
      item.appendChild(a);
    } else {
      item.appendChild(img);
    }
    fragment.appendChild(item);
  });
  grid.appendChild(fragment);
})();
