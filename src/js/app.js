import PopoverWidget from "./popover-widget/popover";
import CallWidget from "./call-widget/call-widget";


document.addEventListener("DOMContentLoaded", () => {

  // prepare UI interface to call widget
  const prepareWidget = new CallWidget(document.querySelector(".container"));
  prepareWidget.showWidget();

  const widgetPopover = new PopoverWidget(document.querySelector(".main-container"));
  widgetPopover.textItems("Hello, this is popover header!", "Let's do something!");

});
