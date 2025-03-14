// Task: Create an array of JavaScript objects where each book belongs to a specific category,
// and implement a filtering functionality that allows the user to sort books by category.

// Before you start:
// 1. Go to the "image" folder and identify the relevant books you want to include in the array.
// 2. Use websites like saxo.dk or amazon.co.uk to find detailed information about each book.
// 3. Each book must have a **category** (e.g., "fiction", "non-fiction", "science", etc.).
// 4. Implement a **filtering function** that allows the user to select a category and only see the books belonging to that category.
// TIP: Use the method from the previous task where we sorted movies and apply `.filter()` to your array.

// Example: Array of books categorized by genre
// Fiction
// {title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "fiction", publishedYear: 1925, pages: 218, images:"/img/the-great-gatsby.webp" }

const books = [
    {title:"1984", genre:"sci-fi", img:"/img/1984.webp", url:"https://www.goodreads.com/book/show/61439040-1984?ac=1&from_search=true&qid=sV99B9U2Hg&rank=1"},
    {title:"A Brief History of Time", genre:"science", img:"/img/a-brief-history-of-time.webp", url:"https://www.goodreads.com/book/show/3869.A_Brief_History_of_Time?from_search=true&from_srp=true&qid=QyLkIIcQqU&rank=1"},
    {title:"A Game of Thrones", genre:"Fantasy", img:"/img/a-game-of-thrones.webp", url:"https://www.goodreads.com/book/show/13496.A_Game_of_Thrones?ref=nav_sb_ss_1_17"},
    {title:"A peoples History of the United States", genre:"history", img:"/img/a-peoples-history-of-the-united-states.webp", url:"https://www.goodreads.com/book/show/2767.A_People_s_History_of_the_United_States?ref=nav_sb_ss_1_37"},
    {title:"Becoming", genre:"non-fiction", img:"/img/becoming.webp", url:"https://www.goodreads.com/book/show/38746485-becoming?from_search=true&from_srp=true&qid=XLuEYDAXIe&rank=1"},
    {title:"Cosmos", genre:"science", img:"/img/cosmos.webp", url:"https://www.goodreads.com/book/show/55030.Cosmos?from_search=true&from_srp=true&qid=6qj4sYq80r&rank=1"},
    {title:"Dracula", genre:"horror", img:"/img/dracula.webp", url:"https://www.goodreads.com/book/show/17245.Dracula?ref=nav_sb_ss_1_7"},
    {title:"Educated", genre:"non-fiction", img:"/img/educated.webp", url:"https://www.goodreads.com/book/show/35133922-educated?from_search=true&from_srp=true&qid=8q5Ek26oVw&rank=1"},
    {title:"Essentials of Classic Italian Cooking", genre:"cookbook", img:"/img/essentials-of-classic-italian-cooking.webp", url:"https://www.goodreads.com/book/show/19552.Essentials_of_Classic_Italian_Cooking?ref=nav_sb_ss_1_37"},
    {title:"Frankenstein", genre:"horror", img:"/img/frankenstein.webp", url:"https://www.goodreads.com/book/show/35031085-frankenstein?ref=nav_sb_ss_1_12"},
    {title:"Gene", genre:"science", img:"/img/gene.webp", url:"https://www.goodreads.com/book/show/27276428-the-gene?ref=nav_sb_ss_2_4"},
    {title:"Guns Germs and Steel", genre:"history", img:"/img/guns-germs-and-steel.webp", url:"https://www.goodreads.com/book/show/1842.Guns_Germs_and_Steel?ref=nav_sb_ss_1_20"},
    {title:"Harry Potter and the Sorceres Stones", genre:"fantasy", img:"/img/harry-potter-and-the-sorcerers-stone.webp", url:"https://www.goodreads.com/book/show/59861530-harry-potter-and-the-sorcerer-s-stone?ref=nav_sb_ss_1_36"},
    {title:"It", genre:"horror", img:"/img/it.webp", url:"https://www.goodreads.com/book/show/830502.It?from_search=true&from_srp=true&qid=3yBzYROOUj&rank=1"},
    {title:"Mastering the Art of French Cooking", genre:"cookbook", img:"/img/mastering-the-art-of-french-cooking.webp", url:"https://www.goodreads.com/book/show/129650.Mastering_the_Art_of_French_Cooking?ref=nav_sb_ss_1_35"},
    {title:"Pride and Prejudice", genre:"fiction", img:"/img/pride-and-prejudice.webp", url:"https://www.goodreads.com/book/show/129915654-pride-prejudice?from_search=true&from_srp=true&qid=O35fVdlc1d&rank=1"},
    {title:"Salt Fat Acid Heat", genre:"cookbook", img:"/img/salt-fat-acid-heat.webp", url:"https://www.goodreads.com/book/show/30753841-salt-fat-acid-heat?ref=nav_sb_ss_1_18"},
    {title:"Sapiens", genre:"non-fiction", img:"/img/sapiens.webp", url:"https://www.goodreads.com/book/show/23692271-sapiens?ref=nav_sb_ss_1_7"},
    {title:"SPQR a History of Ancient Rome", genre:"history", img:"/img/spqr-a-history-of-ancient-rome.webp", url:"https://www.goodreads.com/book/show/28789711-spqr?ref=nav_sb_ss_1_30"},
    {title:"The Great Gatsby", genre:"fiction", img:"/img/the-great-gatsby.webp", url:"https://www.goodreads.com/book/show/41733839-the-great-gatsby?ref=nav_sb_ss_1_16"},
    {title:"The Hobbit", genre:"fantasy", img:"/img/the-hobbit.webp", url:"https://www.goodreads.com/book/show/5907.The_Hobbit_or_There_and_Back_Again?ref=nav_sb_ss_1_10"},
    {title:"The Joy of Cooking", genre:"cookbook", img:"/img/the-joy-of-cooking.webp", url:"https://www.goodreads.com/book/show/327847.The_Joy_of_Cooking?ref=nav_sb_ss_1_18"},
    {title:"The Name of the Wind", genre:"fantasy", img:"/img/the-name-of-the-wind.webp", url:"https://www.goodreads.com/book/show/186074.The_Name_of_the_Wind?ref=nav_sb_ss_1_20"},
    {title:"The Power of Habit", genre:"non-fiction", img:"/img/the-power-of-habit.webp", url:"https://www.goodreads.com/book/show/12609433-the-power-of-habit?ref=nav_sb_ss_1_18"},
    {title:"The Selfish Gene", genre:"science", img:"/img/the-selfish-gene.webp", url:"https://www.goodreads.com/book/show/61535.The_Selfish_Gene?ref=nav_sb_ss_1_16"},
    {title:"The Shining", genre:"horror", img:"/img/the-shining.webp", url:"https://www.goodreads.com/book/show/11588.The_Shining?ref=nav_sb_ss_1_11"},
    {
        title:"The Silk Roads", 
        genre:"history", 
        img:"/img/the-silk-roads.webp", 
        url:"https://www.goodreads.com/book/show/25812847-the-silk-roads?ref=nav_sb_ss_1_14"
    },
    {
        title:"To Kill a Mocking Bird", 
        genre:"fiction", 
        img:"/img/to-kill-a-mockingbird.webp", 
        url:"https://www.goodreads.com/book/show/2653.Notes_on_To_Kill_a_Mocking_Bird?ref=nav_sb_ss_1_22"
    },
];

const booksContainer = document.getElementById("books-container");
const selectedCategory = document.getElementById("category-select");

function displayBooks(bogListe){
    booksContainer.innerHTML = "";

    bogListe.forEach((book) => {
        const bookElement = document.createElement("article");
        bookElement.innerHTML = `
        <h3>${book.title}</h3>
        <p>Genre: ${book.genre}</p>
        <a href="${book.url}" target="_blank">
        <img src="${book.img}">
        </a>
        </figure>`;
        
        booksContainer.appendChild(bookElement);
    });
}

displayBooks(books);

selectedCategory.addEventListener("change", () => {
    const selectedValue = selectedCategory.value;
    let filteredBooks;

    if(selectedValue === "all"){
        filteredBooks = books;
    } else {
        filteredBooks = books.filter(book => book.genre === selectedValue);
    }

    displayBooks(filteredBooks);
});