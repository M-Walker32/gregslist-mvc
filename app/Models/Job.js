import { generateId } from "../Utils/generateId.js";

export class Job {
  constructor({ id = generateId(), title, pay, qualifications, description, image }) {
    this.id = id,
      this.title = title,
      this.pay = pay,
      this.qualifications = qualifications,
      this.description = description
    this.image = image
  }

  get jobTemplate() {
    return `<div class="job col-md-4 p-4">
    <div class="bg-white shadow rounded">
      <img class="w-100 rounded-top" src="${this.image}" alt="image">
      <div class="p-3">
        <p class="text-center uppercase"><b>Job Title:${this.title} Starting Pay: ${this.pay}</b></p>
        <p class="m-0">${this.description}</p>
      </div>
      <div class="p-3 d-flex justify-content-between align-items-center">
        <p class="m-0">${this.qualifications}</p>
        <i class="mdi mdi-delete selectable" onclick="app.jobsController.removeJob('')"></i>
      </div>
      </div>
    </div>`
  }
}