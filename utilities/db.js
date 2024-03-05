// const { db } = require("../models/userSchema");

// const db = mongoose.connection;

// Sample data for users
const usersData = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Doe', email: 'jane@example.com' },
    { name: 'Bob Smith', email: 'bob@example.com' },
    { name: 'Alice Johnson', email: 'alice@example.com' },
    { name: 'Charlie Brown', email: 'charlie@example.com' },
  ];
  
  // Sample data for posts
  const postsData = [
    { title: 'First Post', content: 'Why did the programmer quit her job? Because she didn’t get arrays.' },
    { title: 'Second Post', content: 'Why do Java programmers have to wear glasses? Because they don’t C#.' },
    { title: 'Third Post', content: 'A programmer is heading out to the grocery store, so his wife tells him “get a gallon of milk, and if they have eggs, get a dozen.” He returns with 13 gallons of milk.' },
    { title: 'Fourth Post', content: 'Why do programmers take so long in the shower? They read the directions on the shampoo bottle and follow them to the letter: Lather, rinse, and repeat.' },
    { title: 'Fifth Post', content: 'My mind is like an internet browser, 19 tabs open, 3 of them are frozen, ads popping up everywhere, I have no idea where the music is coming from.' },
  ];
  
  // Sample data for comments
  const commentsData = [
    { postId: null /* Populate with actual Post _id later */, text: 'Great post!' },
    { postId: null, text: 'I enjoyed reading this.' },
    { postId: null, text: 'Got to love the humor,looking forward to more content.' },
    { postId: null, text: 'Nice insights.' },
    { postId: null, text: 'Well written!' },
  ];

module.exports = {usersData, postsData,commentsData};

