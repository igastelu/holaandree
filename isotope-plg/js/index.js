// external js: isotope.pkgd.js, packery-mode.pkgd.js

$('.grid').isotope({
  layoutMode: 'packery',
  itemSelector: '.grid-item',
  percentPosition: true,
  packery: {
    gutter: '.gutter-sizer'
  }
});

