const data = new Proxy({}, {
    set: (target, property, value) => {
        target[property] = value;
        updateRender(property, value);
    }
});

function updateRender(property, value) {
    document.querySelector(`[data-binding="${property}"]`)
        .innerText = value;
}

function getUsrInput(property) {
    return document.getElementById(property).value;
}

function submitUsrInputs() {
    data.p1 = getUsrInput("input-1");
    data.p2 = getUsrInput("input-2");
}