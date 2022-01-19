const user = {
    name: "Fer",
    id: 8
};

const book1 = {
    title: "The Lord of the Rings",
    author: "Tolkien, J.R.R.",
    isbn: "9780007182367",
    category: "Classic Fantasy"
};

const book2 = {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    isbn: "9780756404741",
    category: "Modern Fantasy"
};

user.favBooks = [book1, book2];

console.log(user);

const library = [];

library.push(user);

console.log(library);

const book3 = {
    title: "The third book",
    author: "Me",
    isbn: "0000066600000",
    category: "Cool Literature"
};

library[0].favBooks.push(book3);

console.log(user);

const user2 = {
    name: 'Neka',
    id: 12,
    favBooks: [
      {
        title: 'Fundation',
        author: 'Asimov',
        isbn: '0316769487',
        category: 'Sci-fy'
      },
      {
        title: 'The Name of the Wind',
        author: 'Patrick Rothfuss',
        isbn: '9780756404741',
        category: 'Modern Fantasy'
      },
      {
        title: 'The third book',
        author: 'Me',
        isbn: '0000066600000',
        category: 'Cool Literature'
      }
    ]
};