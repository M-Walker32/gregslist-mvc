import { ProxyState } from "../AppState.js";

function _drawJobs() {
  debugger
  let jobsTemplate = ''
  ProxyState.jobs.forEach(job => jobsTemplate += job.jobTemplate)
  document.getElementById('listings').innerHTML = `<div class="row jobs">
  ${jobsTemplate}
  </div>}`
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
