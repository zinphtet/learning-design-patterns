// THE FACADE PATTERN

// abstraction kind of
// this pattern is we normally used in daily life to hide the detail implementation and export the api

const addMyEvent = function (el, ev, fn) {
  if (el.addMyEvent) {
    el.addMyEvent(ev, fn, false);
  } else if (el.attachEvent) {
    el.attachEvent("on" + ev, fn);
  } else {
    el["on" + ev] = fn;
  }
};
