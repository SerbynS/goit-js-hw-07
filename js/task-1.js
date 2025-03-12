const categories = document.querySelectorAll(".item");

console.log(`Number of categories: ${categories.length}`);
console.log(categories[0].querySelector("h2").textContent);

categories.forEach((categorie) => {
    console.log(`Category: ${categorie.querySelector("h2").textContent}`);
    console.log(`Elements: ${categorie.querySelectorAll("li").length}`);
});