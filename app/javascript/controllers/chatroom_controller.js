import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["input", "chatbox"];

  connect() {
    console.log("hi");
  }

  send() {
    let msgText = this.inputTarget.value;
    this.chatboxTarget.innerHTML += `<div>${msgText}</div>`
    this.inputTarget.value = ""
  }
}
