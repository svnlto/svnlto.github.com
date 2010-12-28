jQuery(document).ready(function ($) {
  
  var r = Raphael('bg', '100%', '100%'), triangle, rectangle;

  triangle = r.g.triangle(500, 300, 400).attr({
    'fill': '#98E2B0',
    'opacity': 0.8,
    'stroke-width': 0
  }).rotate(45, true);
  
  rectangle = r.rect(300, 105, 600, 25).attr({
    fill: 'purple',
    opacity: .4,
    'stroke-width': 0
  });
  

  $(triangle.node).click(function (e) {
    var triangle = this.raphael;
    
    console.dir(triangle);
    triangle.animate({
      fill: 'purple', 
      opacity: 1
      }, 1000, "bounce");
  });

});
