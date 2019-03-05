const faker = require('faker')

let catagories = [ 'flying', 'dining', 'wet', 'insane', 'hunt', 'travel', 'festival', 'exotic', 'racing', 'hobby' ]


module.exports = entry = () => {

  let returnObj = {
    id: faker.random.number(),
    title: `${faker.lorem.sentence()}`,
    category: `${faker.helpers.randomize(catagories)}`,
    image_URL: `${faker.image.imageUrl()}`,
    description: `${faker.lorem.paragraph(2)}`,
    price: faker.finance.amount(1000, 10000)
  }

  let payload = JSON.stringify(returnObj)

  return payload
}


