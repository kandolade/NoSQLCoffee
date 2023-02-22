import bcrypt from 'bcrypt'
const data ={
    products: [
        {

          name: 'RedBull',
          category:'Drink',
          image: 'https://www.kindpng.com/picc/m/138-1383804_red-bull-png-image-background-red-bull-energy.png',
          price: 30,
          countInStock: 10,
          type:'Veg',
          rating: 4.5,
          numReviews: 10,
          description: 'Red Bull is a  of energy drinks  by Austrian company Red Bull GmbH. ',
        },
        {

          name: 'Mountain Dew',
          category: 'Drink',
          image: 'http://assets.stickpng.com/thumbs/587186d27b7f6103e35c6cc8.png',
          price: 6,
          countInStock: 20,
          type:'Veg',
          rating: 3,
          numReviews: 10,
          description: 'Mountain Dew  a carbonated soft drink brand  and owned by PepsiCo',
        },
        {

          name: 'Sting',
          category: 'Drink',
          image: 'https://www.seekpng.com/png/detail/888-8887796_sting-strawberry-sting-energy-drink-india.png',
          price: 20,
          countInStock: 10,
          type:'Non-Veg',
          rating: 4.8,
          numReviews: 1,
          description: 'Sting Energyk from PepsiCo International and produced by Rockstar Inc.',
        },

      ],

}

export default data