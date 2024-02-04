
export default class PopoverWidget {
  // This class response for create popover
  constructor(element) {
    this._popovers = [];
  }

  preparePopover(headerText, bodyText, element) {
    const popoverElement = document.createElement('div');
    popoverElement.classList.add('popover', 'bs-popover-top');

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

    const leftPopover = left + element.offsetWidth / 2 - popoverElement.offsetWidth / 2;
    popoverElement.style.left = `${leftPopover}px`;
    const topPopover = top
      - parseFloat(paddingTop)
      - parseFloat(borderTopWidth)
      - popoverElement.offsetHeight;
    popoverElement.style.top = `${topPopover}px`;

    return id;
  }

  remove(id) {
    const popover = this.popovers.find((t) => t.id === id);

    popover.element.remove();

    this.popovers = this.popovers.filter((t) => t.id !== id);
  }

  showHello() {

    console.log("Hello, ");
  }
}




