const { db, Gardener, Vegetable, Plot } = require('./models');
const vegetableData = [{name: 'tomato', color: 'red', planted_on: null},
                       {name: 'spinach', color: 'green', planted_on: null},
                       {name: 'pumpkin', color: 'orange', planted_on: null},
                       {name: 'squash', color: 'yellow', planted_on: null}];
const gardenerData = [{name: 'Jing', age: 30}, {name: 'McRae', age: 37}];
const plotData = [{size: 5, shaded: true}, {size: 3, shaded: false}];
db.sync({force: true})
  .then(() => {
    console.log('Database is synced!')
    return Promise.all([Vegetable.bulkCreate(vegetableData, {returning: true}), 
                        Gardener.bulkCreate(gardenerData, {returning: true}), 
                        Plot.bulkCreate(plotData, {returning: true})
                      ]);
  })
  .then(insertedDataPromise => {
    const [vegetables, gardeners, plots] = insertedDataPromise;
    console.log(vegetables);
    console.log(gardeners);
    console.log(plots);
    console.log('database seeded!');
  })
  .catch(err => {
    console.log('Disaster! Something went wrong!');
    console.log(err);
  })
  //.finally( () => {
  //  db.close()
  //});

/*Gardener.bulkCreate([{
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
}); */
