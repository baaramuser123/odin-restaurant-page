import "./styles.css";
import { displayHome } from "./home";
import { displayMenu } from "./menu";
import { displayAbout } from "./about";

( () => {


displayHome();

const content = document.getElementById("content");

function eraseContent(){
    content.textContent = "";
}

document.addEventListener("click", (e)=> {
    switch(e.target.id){
        case "home":
            eraseContent();
            displayHome();
            break;
        case "menu":
            eraseContent();
            displayMenu();
            break;
        case "about":
            eraseContent();
            displayAbout();
            break;
        default:
    }
    
});
})();
