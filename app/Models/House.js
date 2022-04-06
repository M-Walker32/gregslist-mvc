import { generateId } from "../Utils/generateId.js";

export class House {
  constructor({ id = generateId(), address, bedrooms, bathrooms, description, image, squareFootage, price, lotSize }) {
    this.id = id
    this.address = address
    this.bedrooms = bedrooms
    this.bathrooms = bathrooms
    this.description = description
    this.image = image
    this.squareFootage = squareFootage
    this.price = price
    this.lotSize = lotSize
  }

  get houseTemplate() {
    return ` <div class="house col-md-4 p-4">
      <div class="bg-white shadow rounded">
        <img class="w-100 rounded-top" src="${this.image}" alt="image">
        <div class="p-3">
          <p class="text-center uppercase"><b>Address:${this.address} Bedrooms: ${this.bedrooms} Bathrooms: ${this.bathrooms}</b></p>
          <p class="m-0">${this.description}</p>
        </div>
        <div class="p-3 d-flex justify-content-between align-items-center">
          <p class="m-0">$${this.price}</p>
          <p class="m-0">Lot: ${this.lotSize}</p>
          <p class="m-0">Sqft: ${this.squareFootage}</p>
          <i class="mdi mdi-delete selectable" onclick="app.carsController.removeCar('')"></i>
        </div>
      </div>
    </div>`
  }

}