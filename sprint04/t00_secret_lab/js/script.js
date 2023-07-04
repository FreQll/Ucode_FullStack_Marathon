const hulkStyle = `
    font-size: 130px;
    letter-spacing: 6px;
`;

const humanStyle = `
    font-size: 60px;
    letter-spacing: 2px;
`;

const title = document.getElementById('hero');
const back = document.getElementById('lab');
let hulk = false;

btn.onclick = function() {
    if (!hulk) {
        title.innerHTML = 'Hulk';
        title.style.cssText = hulkStyle;
        back.style.backgroundColor = "#70964b";
        hulk = true;
    }
    else {
        title.innerHTML = 'Bruce Banner';
        title.style.cssText = humanStyle;
        back.style.backgroundColor = "#ffb300";
        hulk = false;
    }
}