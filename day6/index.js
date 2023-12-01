const books = [
    {   
        title:"Speaking JavaScript",
        author:"Axel Rauschmayer",
        pages:460   
    },

    {
        title:"Programming JavaScript",
        author:"Eric Elliott",
        pages:254
    },

    {
        title:"Understanding ECMAScript 6",
        author:"Nicholas C.Zakas",
        pages:352
    }
];

const newBook = {
    title:"Learning JavaScript Design Patterns",
    author:"Addy Osmani",
    pages:252
};

books.push(newBook);


//const removeBook = books.shift();
//console.log(books.length);

const totalPages = books.reduce((sum, book) => sum + book.pages, 0);
console.log(totalPages);

//books.forEach(book => console.log(book.title));
//slice
//const lastTwoBooks = books.slice(-2);
//console.log(lastTwoBooks);
//console.log(books.length);
//console.log(books);