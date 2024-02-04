import PopoverWidget from "./popover-widget/popover";
import CallWidget from "./call-widget/call-widget";

console.log("start");

document.addEventListener("DOMContentLoaded", () => {

  // prepare UI interface to call widget
  const prepareWidget = new CallWidget(document.querySelector(".container"));
  prepareWidget.showWidget();

  const widgetPopover = new PopoverWidget();
  widgetPopover.showHello();

  widgetPopover.preparePopover('NiceHeader', 'Hello World!', document.querySelector(".widjet-container"));

});
