
function showContent(category) {
  
    const contentHTML = resources.filter((resource) => resource.category === category)
        .map((resource) => {
            return `
                <section class="resource-category" id="${resource.category}">
                    <h2>${resource.category}</h2>
                    <p>${resource.text}</p>
                    <ul>
                        ${resource.sources.map(source => 
                            `<li><a href="${source.url}">${source.title}</a></li>`
                        ).join('')}
                    </ul>
                </section>
            `;
        }).join('');  

    document.getElementById("content").innerHTML = contentHTML;
}

const buttons = document.querySelectorAll("nav button");

//"Active" har jag fått hjälp av w3schools och chatgpt. https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_active_element
for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", () => {
        
        for (let innerIndex = 0; innerIndex < buttons.length; innerIndex++) {
            buttons[innerIndex].classList.remove("active");
        }

        buttons[index].classList.add("active");

        //Hjälp av chatgpt att få mitt id att matcha med category sanity and headless cms.
        let categoryId = buttons[index].id.replace(/-/g, " "); 
        showContent(categoryId);
    });
}

showContent("HTML");
