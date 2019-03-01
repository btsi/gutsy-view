const faker = require('faker')

let catagories = [ 'flying', 'dining', 'wet', 'insane', 'hunt', 'travel', 'festival', 'exotic', 'racing', 'hobby' ]

module.exports = databaseEntry = () => {
  return {
    id: faker.random.number(),
    title: `${faker.lorem.sentence()}`,
    category: `${faker.helpers.randomize(catagories)}`,
    image_URL: `${faker.image.imageUrl()}`,
    description: `${faker.lorem.paragraph(2)}`,
    price: '$' + faker.finance.amount(1000, 10000)
  }
}

