/**
 * Функция установки новых аттрибутов и их значений для элемента дом-дерева html.
 * @param {object} el - элемент дом-дерева;
 * @param {object} options - аттрибуты, переданные словарем {наименование аттрибута: его значение}.
 */

export default function SetAttributes(el, options) {
  Object.keys(options).forEach((attr) => {
    el.setAttribute(attr, options[attr]);
  });
}
