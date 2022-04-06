import { Car } from "./Models/Car.js"
import { House } from "./Models/House.js"
import { Job } from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  houses = [
    new House({
      address: '101 parakeet rd. S',
      bedrooms: 3,
      bathrooms: 2,
      description: "nice house neighbors are good there are no dead bodies currently here",
      image: "https://www.venuereport.com/media/cache/resolve/venue_roundup_single_image/uploads/+0Regular_Roundup/Treehouse2017/Cindercone_05.jpg",
      squareFootage: 200,
      price: 983267,
      lotSize: .032
    }),
  ]

  /** @type {import('./Models/Car').Car[]} */
  cars = [
    new Car({
      color: 'red',
      description: 'This is my test car',
      img: 'https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/03/1988_Accord_3rd_Generation.jpg?resize=980:*',
      make: 'Honda',
      model: 'Accord',
      mileage: '289000',
      price: 5500,
      year: 1988
    })
  ]

  jobs = [
    new Job({
      title: 'Pumpkin Eater',
      pay: '$3 per hour',
      qualifications: 'Enjoys the taste of pumpkin, reltaivly large stomach.',
      description: 'YOu eats lots of pumpkin. AND YOU DONT COMPLAIN!!!!',
      image: 'https://miro.medium.com/max/1200/1*g0H2lo3zmfDhPoPB8nXA2Q.jpeg'
    }),
    new Job({
      title: 'Pumpkin Eater',
      pay: '$3 per hour',
      qualifications: 'Enjoys the taste of pumpkin, reltaivly large stomach.',
      description: 'YOu eats lots of pumpkin. AND YOU DONT COMPLAIN!!!!',
      image: 'https://miro.medium.com/max/1200/1*g0H2lo3zmfDhPoPB8nXA2Q.jpeg'
    }),
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
