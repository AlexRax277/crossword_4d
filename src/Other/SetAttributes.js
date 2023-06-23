export default function SetAttributes(el, options) {
  Object.keys(options).forEach((attr) => {
    el.setAttribute(attr, options[attr]);
  });
}
