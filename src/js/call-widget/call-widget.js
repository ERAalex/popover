
export default class CallWidget {

  // element is a place were to but our widjet call logic
  constructor(element) {
    this._element = element;
    
  }

  showWidget() {
    console.log(this.mainPlace)
    let prepareDiv = document.createElement("div");
    prepareDiv.classList.add("widjet-container");
    this._element.appendChild(prepareDiv);

    let newButton = document.createElement("button");
    newButton.setAttribute('content', 'test content');
    newButton.textContent = 'Press to call popup';
    newButton.classList.add("main-button");
    prepareDiv.appendChild(newButton);

  }
  
}
