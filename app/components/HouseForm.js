export function getHouseForm() {
  return `<form onsubmit="app.housesController.addHouse()">
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="address" class="form-label">Address</label>
      <input type="text" class="form-control" name="address" id="address" aria-describedby="address"
        placeholder="Address..." required>
    </div>
    <div>
      <label for="bedrooms" class="form-label">Bedrooms:</label>
      <input type="number" class="form-control" name="bedrooms" id="bedrooms" aria-describedby="bedrooms"
        placeholder="0" required>
    </div>
  </div>
  <div class="mb-3 d-flex justify-content-between">
    <div>
      <label for="bathrooms" class="form-label">Bathrooms:</label>
      <input type="number" class="form-control" name="bathrooms" id="bathrooms" aria-describedby="bathrooms"
        placeholder="0" required>
    </div>
    <div>
    <label for="lotSize" class="form-label">Lot Size:</label>
    <input type="number" class="form-control" name="lotSize" id="lotSize" aria-describedby="lotSize"
      placeholder="0" required>
  </div>
</div>
<div class="mb-3 d-flex justify-content-between">
  <div>
    <label for="squareFootage" class="form-label">Square Footage:</label>
    <input type="number" class="form-control" name="squareFootage" id="squareFootage" aria-describedby="squareFootage"
      placeholder="0" required>
  </div>
    <div>
      <label for="price" class="form-label">Price</label>
      <input type="number" class="form-control" name="price" id="price" aria-describedby="price"
        placeholder="Price..." min='1' required>
    </div>
  </div>
  <div class="mb-3">
    <div>
      <label for="image" class="form-label">Image Url</label>
      <input type="url" class="form-control" name="image" id="image" aria-describedby="image"
        placeholder="http://thishousedoesnotexist.com" required>
    </div>
  </div>
  <div class="mb-3">
    <div>
      <label for="description" class="form-label">Description</label>
      <textarea type="text" class="form-control" name="description" id="description"
        aria-describedby="description" placeholder="Description..." required> </textarea>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-primary">Create</button>
  </div>
</form>`
}