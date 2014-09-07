/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'Codeforces Live Feed',
  icon: 'images/menu_icon.png',
  subtitle: 'View programming contest submissions straight from your wrist',
  body: 'No need to cycle through computer screen windows!'
});

main.show();

main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Caisa and Sugar',
        subtitle: 'x3160'
      }, {
        title: 'Caisa and Pylons',
        subtitle: 'x3242'
      }, {
        title: 'Gargari and Bishops',
        subtitle: 'x1405'
      }, {
        title: 'Gargari and Permutations',
        subtitle: 'x1003'
      }, {
        title: 'Caisa and Tree',
        subtitle: 'x390'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item #' + e.itemIndex + ' of section #' + e.sectionIndex);
    console.log('The item is titled "' + e.item.title + '"');
  });
  menu.show();
});

main.on('click', 'select', function(e) {
  var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Final Standings: Solved 0 of 5',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('Recent Submission');
  card.subtitle('Wrong answer on test 2');
  card.body('vladvis, Gargari and Bishops');
  card.show();
});
