var asteroid = require('../../');
var app = asteroid();

app.use(asteroid.rest());

var schema = {
  name: String
};

var Color = app.model('color', schema);

app.dataSource('db', {adapter: 'memory'});

Color.dataSource('db');

Color.create({name: 'red'});
Color.create({name: 'green'});
Color.create({name: 'blue'});

app.listen(3000);

console.log('a list of colors is available at http://localhost:300/colors');