import { ProxyState } from "../AppState.js";

function _drawJobs() {
  // debugger
  let jobTemplate = ''
  ProxyState.jobs.forEach(job => jobTemplate += job.jobTemplate)
  document.getElementById('listings').innerHTML = `
  <div class="row jobs">
  ${jobTemplate}
  </div>}
  `
  // The form inner HTML and innerTEXT will go here
}
export class JobsController {
  constructor() {
    ProxyState.on("jobs", _drawJobs)
    _drawJobs
  }
  // addJob function will go here

  drawJobs() {
    _drawJobs()
  }
}
