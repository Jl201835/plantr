const { db, Gardener, Vegetable } = require('./models');

db.sync()
  .then( () => {
    console.log('Database is synced!')
  })
  .catch(err => {
    console.log('Disaster! Something went wrong!');
    console.log(err);
  })
  //.finally( () => {
  //  db.close()
  //});

Gardener.bulkCreate([{
  name: 'Jing',
  age: 30,
  favoriteVegetableId: 1
}, {
  name: 'McRae',
  age: 37,
  favoriteVegetableId: 3
}])
.then (() => {
  return Gardener.findAll();
})
.then ((gardeners) => {
  console.log(gardeners)
})
.catch((err) => {
  console.log(err);
});
