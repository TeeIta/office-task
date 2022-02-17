//
function action(event) {
    // const message = 'DOM loaded successfully...';
    // alert(message);
    // console.log(message);

    const langSelect = document.getElementById("language-select");
    console.log(langSelect);

    langSelect.addEventListener('change', function(event) {
        // alert('Stop touching me!');
        console.log(langSelect.selectedIndex);
        const selectedIndex = langSelect.selectedIndex;
        const selectedOption = langSelect.options[selectedIndex];
        console.log(selectedOption.innerHTML);
        const lang = selectedOption.innerHTML;
    });

    // const select = document.getElementById("btn-add");
    // console.log(select);

    // document.getElementById("btn-add").onclick = function() { myFunction() };


}

function convertStringToHTML(htmlString) {

}

function myFunction() {

    const langSelect = document.getElementById("language-select");
    const selectedIndex = langSelect.selectedIndex;
    const selectedOption = langSelect.options[selectedIndex];
    const lang = selectedOption.innerHTML;

    // alert(lang);
    // console.log(lang);
    const template = `
    <img src="./Resources/Icons/${lang}.png" class="Slide-show">
    <input type="checkbox" checked="checked" class="checkbox">
    `;

    console.log(template);

    const view = document.getElementById("language-view");
    console.log(view);
    // view.appendChild(template);

    let doc = new DOMParser().parseFromString('<div>Hello</div>', 'text/html');
    let div = doc.body.firstChild;
    console.log(div);

}

document.addEventListener('DOMContentLoaded', action);

// const firstName = " Tee";
// const greetings = "Hi, i am";
// const fullGreeting = greetings + "" + firstName;
// console.log(fullGreeting);