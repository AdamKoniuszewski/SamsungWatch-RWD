/* Zmiana motywu */
let sheetID = 0;
function themes (css, img, pageNo) {
    this.css = css;
    this.img = img;
    this.pageNo = pageNo;
}



/* Obiekty motywów */
var Dark = new themes("../CSS/dark_theme.css","../IMAGES/smartWatchDark.png","036",);
var Blue = new themes("../CSS/blue_theme.css","../IMAGES/smartWatchBlue.png","037",);
var Beige = new themes("../CSS/beige_theme.css","../IMAGES/smartWatchBeige.png","038",);

let styleList =[Dark,Blue,Beige];

console.log(styleList.length);

function previousTheme() {
    sheetID--;
    if (sheetID == -1) {
        sheetID = styleList.length-1;
    };
    document.getElementById('theme').setAttribute('href',styleList[sheetID].css);
    document.getElementById('watchIMG').setAttribute('src',styleList[sheetID].img);
    document.getElementById('PageNum').innerHTML=innerHTML=styleList[sheetID].pageNo;
}
function nextTheme() {
    sheetID++;
    if (sheetID == styleList.length) {
        sheetID = 0;
    };
    document.getElementById('theme').setAttribute('href',styleList[sheetID].css);
    document.getElementById('watchIMG').setAttribute('src',styleList[sheetID].img);
    document.getElementById('PageNum').innerHTML=styleList[sheetID].pageNo;
}

/********koniec zmiany motywu */
