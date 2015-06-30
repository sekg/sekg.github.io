$.extend({
  random: function(n) {
    return Math.floor(n * (Math.random() % 1));
  },
  randomBetween: function(min, max) {
    return min + $.random(max - min + 1);
  },
  generate: function() {
    var k1 = $.randomBetween(1000,9999);
    var k2 = $.randomBetween(1000,9999);
    var k3a = $.randomBetween(6,9); // min 5,9
    var k3b = $.randomBetween(6,9);
    var k3c = $.randomBetween(6,9);
    var k3d = $.randomBetween(6,9);
    var k3e = k3a + "" + k3b + "" + k3c + "" + k3d;
    var k4 = k3a * k3b * k3c * k3d;

    return k1 + "-" + k2 + "-" + k3e + "-" + k4;
  }
});

$(document).ready(function() {
  var $btn = $('#gen');
  var $key = $('#key');

  $key.val($.generate()).click(function() {
    $(this).select();
  });

  $btn.click(function() {
    $key.val($.generate());
  });
});
