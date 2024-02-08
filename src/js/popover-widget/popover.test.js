import PopoverWidget from "./popover";

describe("PopoverWidget class", () => {

  test("Show and Remove a popover", () => {

    const element = document.createElement("div");
    const button = document.createElement("button");
    button.classList.add("main-button");
    element.appendChild(button);
    document.body.appendChild(element);

    let popover = new PopoverWidget(element);

    const headerText = "Header Text";
    const bodyText = "Body Text";

    const id = popover.preparePopover(headerText, bodyText, element);
    expect(popover._popovers.length).toBe(1);

    expect(document.querySelector(".popover")).toBeTruthy();

    popover.removePopover(id);
    expect(popover._popovers.length).toBe(0);
    expect(document.querySelector(".popover")).toBeFalsy();
  });
});
