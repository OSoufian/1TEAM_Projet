const elements = document.querySelectorAll("#autocom-box > li");
const searchBar = document.querySelector(".search");
const elementsContainer = document.getElementById('autocom-box');

function searchWord() {
    searchBar.style.color = "black"
    var misses = 0;
    elements.forEach(element => {
        let elementTreated = element.childNodes[0].innerHTML.toLowerCase().replace(/ /g,'');
        let searchBarTreated = searchBar.value.toLowerCase().replace(/ /g,'');
        if (elementTreated.match(searchBarTreated)){
            element.style.display = "";
        }
        else{
            element.style.display = "none";
            misses ++;
        }
    });
    if (misses == elements.length) {
        elements.forEach(element => {element.style.display = ""})
        searchBar.style.color = "red"
    }
}




searchBar.addEventListener("keyup", searchWord);

searchBar.addEventListener('focus', (event) => {
    elementsContainer.style.display = "block";
}
, true);


window.addEventListener('click', (event) => {
    var clickOnList = false;
    // console.log(event.target)
    if(event.target == searchBar){
        clickOnList = true;
    }
    elements.forEach(element => {
        if(event.target == element || event.target == element.childNodes[0]){
            clickOnList = true;
        }
    });
    // console.log(clickOnList)
    if (clickOnList){
        return null;
    }
    elementsContainer.style.display = 'none';
}
, true);
