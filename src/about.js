/* <div class="menu-item">
    <h1>About Ground Dirt</h1>
    <h2>
        We've been grinding dirt and finding pre-ground 
        dirt across the country for decades! Perhaps some 
        of the most successful dirt harvesters in the nation,
        we've long championed the practice of eating dirt. If
        you haven't yet, we strongly recommend you try our finest
        ground dirt in our restuarant!
    </h2>
</div> */

export function displayAbout(){
    const content = document.getElementById("content");
    const container = document.createElement("div");
    const header = document.createElement("h1");
    const description = document.createElement("h2");
    container.classList.add("menu-item");
    header.textContent = "About Ground Dirt";
    description.textContent = `We've been grinding dirt and finding pre-ground 
        dirt across the country for decades! Perhaps some 
        of the most successful dirt harvesters in the nation,
        we've long championed the practice of eating dirt. If
        you haven't yet, we strongly recommend you try our finest
        ground dirt in our restuarant!`;
    container.append(header, description);
    content.appendChild(container);
}