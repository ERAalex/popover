
export default class PopoverWidget {
  // This class response for create popover
  constructor(element) {
    this._element = element;
    this._popovers = [];
    this._buttonValidate = this._element.querySelector(".main-button");
    this._textItems = {
      headerText: '',
      bodyText: ''
    };

    this.onPressButton = this.onPressButton.bind(this);
    this._buttonValidate.addEventListener("click", this.onPressButton);
  }


  textItems(headerText, bodyText) {
    this._textItems.headerText = headerText;
    this._textItems.bodyText = bodyText;
  }

  onPressButton(event) {
    // on press show popover
    event.preventDefault(); 

    let lenghtPopoverActive = this._popovers.length;
    
    if (lenghtPopoverActive !== 0) {
      this._popovers.forEach((popover) => {
        this.removePopover(popover.id);
      })
    } else {

      this.preparePopover(this._textItems.headerText, this._textItems.bodyText, this._element);
      let elementPopovover = document.body.querySelector(".popover");
      elementPopovover.classList.toggle("hidden");
    }
  }


  preparePopover(headerText, bodyText, element) {
    const popoverElement = document.createElement('div');
    popoverElement.classList.add('popover', 'bs-popover-top', 'hidden');

    const popoverHeader = document.createElement('div');
    popoverHeader.classList.add('popover-header');
    popoverHeader.textContent = headerText;

    const arrow = document.createElement('div');
    arrow.classList.add('arrow');

    const popoverBody = document.createElement('div');
    popoverBody.classList.add('popover-body');
    popoverBody.textContent = bodyText;

    popoverElement.appendChild(popoverHeader);
    popoverElement.appendChild(popoverBody);
    popoverElement.appendChild(arrow);

    document.body.appendChild(popoverElement);

    // perfomance it's like just timedata but calculating from the moment of open user browser
    const id = performance.now();

    this._popovers.push({
      id,
      element: popoverElement,
    });

    const { paddingTop, borderTopWidth } = window.getComputedStyle(element);
    const { left, top } = element.getBoundingClientRect();

    const leftPopover = left + element.offsetWidth / 2.5 - popoverElement.offsetWidth / 2;
    popoverElement.style.left = `${leftPopover}px`;
    const topPopover = top - 70;
      - parseFloat(paddingTop)
      - parseFloat(borderTopWidth)
      - popoverElement.offsetHeight;
    popoverElement.style.top = `${topPopover}px`;

    return id;
  }

  removePopover(id) {
    const popover = this._popovers.find((t) => t.id === id);
    popover.element.remove();
    this._popovers = this._popovers.filter((t) => t.id !== id);
  }

}
