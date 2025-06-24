/* <div id="content">
    <h1>Ground Dirt</h1>
    <h2>Welcome to the PREMIER eco-friendly, ethically sourced, organic, vegan, whole-food restauraunt!</h2>
    <div id="main-photo"></div>
    <div></div>
    We promise, our main dish, freshly ground dirt, will please you and your whole party, with its broad appeal. They say nothing tastes better than the ground from whence you came, and to where you shall return!
</div> */

export function displayHome() {
    const content = document.getElementById("content");
    const header = document.createElement("h1");
    const subtitle = document.createElement("h2");
    const photo = document.createElement("div");
    const description = document.createElement("div");

    header.textContent = "Ground Dirt";
    subtitle.textContent = "Welcome to the PREMIER eco-friendly, " +
    "ethically sourced, organic, vegan, whole-food restauraunt!";
    photo.id = "main-photo";
    description.textContent = `We promise, our main dish, freshly ground dirt, will please 
    you and your whole party, with its broad appeal. They say nothing tastes better than 
    the ground from whence you came, and to where you shall return!`;
    content.append(header, subtitle, photo, description);
};