jQuery(document).ready(function ($) {
var paper = Raphael('bg', '100%', '100%');



paper.g.triangle(500, 300, 400).attr({
  'fill': '#98E2B0',
  'opacity': 0.8,
  'stroke-width': 0
}).rotate(45, true);


});
