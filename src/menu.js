        // <h1>Ground Dirt Menu</h1>
        // <div class="menu-item">
        //     <h2>Dirty Martini</h2>
        //     <div id="martini" class="menu-img"></div>
        //     <div>$22    Shaken, from Earth!</div>
        // </div>
        // <div class="menu-item">
        //     <h2>Vanilla Dirt-tte</h2>
        //     <div id="latte" class="menu-img"></div>
        //     <div>$15    Avoid a dirt nap!</div>
        // </div>
        // <div class="menu-item">
        //     <h2>Spaghetti with Dirt</h2>
        //     <div id="spaghetti" class="menu-img"></div>
        //     <div>$33    A twist on a classic!</div>
        // </div>
        // <div class="menu-item">
        //     <h2>Ground Dirt</h2>
        //     <div id="ground-dirt" class="menu-img"></div>
        //     <div>$55    The pieces de resistance!</div>
        // </div>
        // <div class="menu-item">
        //     <h2>Dirt On a Stick</h2>
        //     <div id="cone" class="menu-img"></div>
        //     <div>$22    DON'T get your hands dirty!</div>
        // </div>
        // <div class="menu-item">
        //     <h2>"Brownie"</h2>
        //     <div id="brownie" class="menu-img"></div>
        //     <div>$5    We just found this in the back...</div>
        // </div>

export function displayMenu(){
    const titles = ["Dirty Martini", "Vanilla Dirt-tte", "Spaghetti with Dirt",
         "Ground Dirt", "Dirt On a Stick", "Brownie",];
    const ids = ["martini", "latte", "spaghetti", "ground-dirt",
         "cone", "brownie",];
    const descriptions = ["$22    Shaken, from Earth!", "$15    Avoid a dirt nap!",
        "$33    A twist on a classic!", "$55    The pieces de resistance!",
        "$22    DON'T get your hands dirty!", "$5    We just found this in the back...",
    ];
    const content = document.getElementById("content");
    const header = document.createElement("h1");
    header.textContent = "Ground Dirt Menu";
    content.appendChild(header);
    for(let i=0; i<titles.length; i++){
        const container = document.createElement("div");
        const title = document.createElement("h2");
        const image = document.createElement("div");
        const description = document.createElement("div");
        container.classList.add("menu-item"); 
        title.textContent = titles[i];
        image.id = ids[i];
        image.classList.add("menu-img");
        description.textContent = descriptions[i];
        container.append(title, image, description);
        content.appendChild(container);
    }
};