import { Controller } from "@hotwired/stimulus"
import SlimSelect from 'slim-select'

// Connects to data-controller="form"
export default class extends Controller {
  connect() {
    let slim = new SlimSelect({
      select: this.element,
      settings: {
        searchable: true
      }
    });

  }
}
