import { ProxyState } from "../AppState.js";
import { getHouseForm } from "../components/HouseForm.js";
import { houseService } from "../Services/HouseService.js"



function _drawHouses() {
  let houseTemplate = ''

  ProxyState.houses.forEach(house => houseTemplate += house.houseTemplate)

  document.getElementById('listings').innerHTML = `
    <div class="row houses">
      ${houseTemplate}
    </div>
  `
  document.getElementById('listing-modal-form-slot').innerHTML = getHouseForm()
  document.getElementById('add-listing-modal-label').innerText = 'Add House 🏠'
}

export class HousesController {
  //  Do I want to do anything on page load?
  constructor() {
    ProxyState.on('houses', _drawHouses)
    _drawHouses()
  }

  addHouse() {
    // DO THIS like always
    try {
      event.preventDefault()
      const formElem = event.target
      /**@type {HTMLFormElement} */
      //@ts-ignore
      const houseFormData = {
        // The form doesn't like our data here. 
        address: formElem.address.value,
        bedrooms: formElem.bathrooms.value,
        bathrooms: formElem.bedrooms.value,
        price: formElem.price.value,
        description: formElem.description.value,
        image: formElem.image.value,
        lotSize: formElem.lotSize.value,
        squareFootage: formElem.squareFootage.value
      }
      houseService.addHouse(houseFormData)
      formElem.reset()
      bootstrap.Modal.getOrCreateInstance(document.getElementById('add-listing-modal')).hide()
    }
    //@ts-ignore
    catch {
      console.log('error in form')
    }
  }
  drawHouses() {
    _drawHouses()
    // REVIEW [epic=Mark] How could we refactor this? 
    // @ts-ignore
    // bootstrap.Offcanvas.getOrCreateInstance(document.getElementById('sidenav')).hide()
  }
}