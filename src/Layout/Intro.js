import setAttributes from "./setAttributes.js";

const modal_intro = document.createElement('div');
const modal_dialog = document.createElement('div');
const modal_content = document.createElement('div');
const modal_header = document.createElement('div');
const modal_body = document.createElement('div');
const modal_footer = document.createElement('div');
const modal_title = document.createElement('h1');
const btn_init = document.createElement('button');
const btn_close = document.createElement('button');
const btn_accept = document.createElement('button');  

[
   [modal_intro, {
        "class": "modal fade",
        "id": "staticBackdrop",
        "data-bs-backdrop": "static",
        "data-bs-keyboard": "false",
        "tabindex": "-1",
        "aria-labelledby": "staticBackdropLabel",
        "aria-hidden": "true"
    }],
    [modal_dialog, {"class": "modal-dialog"}],
    [modal_content, {"class": "modal-content"}],
    [modal_header, {"class": "modal-header"}],
    [modal_body, {"class": "modal-body"}],
    [modal_footer, {"class": "modal-footer"}],
    [modal_title, {"class": "modal-title fs-5", "id": "staticBackdropLabel"}],
    [btn_init, {"type": "button", "class": "btn btn-primary btn_init", "data-bs-toggle":"modal", "data-bs-target": "#staticBackdrop"}],
    [btn_close, {"type": "button", "class": "btn-close", "data-bs-dismiss": "modal", "aria-label": "Закрыть"}],
    [btn_accept, {"type": "button", "class": "btn btn-primary", "data-bs-dismiss": "modal"}]

].forEach(el => {
    setAttributes(el[0], el[1]);
});    

btn_init.textContent = 'Начать игру';

btn_accept.textContent = 'gogogo'

modal_intro.appendChild(modal_dialog);
modal_dialog.appendChild(modal_content);
[modal_header, modal_body, modal_footer].forEach(el_content => {
    modal_content.appendChild(el_content);
});
[modal_title, btn_close].forEach(el_header => {
    modal_header.appendChild(el_header);
});
modal_footer.appendChild(btn_accept);

[btn_init, modal_intro].forEach(el_body => {
    document.body.appendChild(el_body);
});


