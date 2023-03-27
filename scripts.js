const container = document.getElementById("container");
const addBook = document.getElementById("addBook");
const titleField = document.getElementById("bookTitle");


const myLibrary = [];

bookForm.addEventListener('reset',function addBookClick(e) {
    // will just use button type as reset, instead of submit
    // console.log(e.target); 
    const data = new FormData(e.target);
    // ...or output as an object
    // console.log(Object.fromEntries(data));
    // let obj = Object.fromEntries(data);
    // console.log(obj.bookAuthor, obj.bookTitle, obj.bookPages);
    
    addBookToLibrary(Object.fromEntries(data));
    // e.preventDefault();
    
    // e.preventDefault();
})


function book(title, author, pages, read) {
    // book constructror
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (this.read) {
            return `The ${this.title} by ${this.author}, ${this.pages} pages, done reading.`;
        }else {
            return `The ${this.title} by ${this.author}, ${this.pages} pages, not read yet.`;
        }
    }
    this.setRead = function(arg) {
        this.read = arg;
    }
    
}


function addBookToLibrary(obj) {
    // do stuff here
    // here we need to present a form to the user to  
    // console.log(obj)
    if(obj.bookTitle && obj.bookAuthor && obj.bookPages) {
        let newBook = new book(obj.bookTitle, obj.bookAuthor, obj.bookPages, false);
    // console.log(newBook);
        myLibrary.push(newBook);
        displayNewBook(newBook);
    }else {
        alert("Book title, Book Author and Book pages are mandatory to fill");
    }
    
}


function deleteBtn(e) {
    // console.log(e.target.data);
    // 
    // let ele = e.target;
    // let divEle = ele.parentNode;
    let divEle = e.target.parentNode;
    // console.log(divEle)
    divEle.remove();
    // console.log(e.target);

}

function handleRead(e, obj) {
    // console.log(e);e
    // obj.read = true;
    obj.setRead(true);
    // e.target.innerText = "Not Read"
    // let textContent = obj.info();
    // console.log(textContent)
    let divEle = e.target.parentNode; 
    console.log(divEle);
    console.log(divEle.firstChild);
    divEle.firstChild.innerText = obj.info();
    divEle.style.backgroundColor = "#9ACD32";
    e.target.remove();
}

function createDivElement(obj) {
    // console.log(obj);
   
    let newDiv = document.createElement("div");
    let divText = document.createElement("p");
    let divBtn = document.createElement("button");
    let readBtn = document.createElement("button");
    //addEventListener
    divBtn.addEventListener('click', deleteBtn);
    readBtn.addEventListener('click', function(e) {
        // console.log(e);
        handleRead(e, obj);
    });

    divText.innerText = obj.info();
    divBtn.innerText = "Delete";
    readBtn.innerText = "Read";

    // append divText and divBtn
    newDiv.appendChild(divText);
    newDiv.appendChild(divBtn);
    newDiv.appendChild(readBtn);

    //style elements for newDiv
    newDiv.style.cssText = "display:flex;justify-content:space-between;align-content:center;margin:8px;border-radius:10px;background-color:teal;padding:8px;"
    // newDiv.style.display = "flex";
    // newDiv.style.justifyContent = "space-between";
    // newDiv.style.alignContent = "center";
    // newDiv.style.margin = "8px"
    // newDiv.style.borderRadius = "10px"
    // newDiv.style.backgroundColor = "teal";
    readBtn.style.cssText = "font-size:16px;font-weight:600;margin:8px;background-color:#9ACD32;border: 2px solid black;border-radius:10px;"
    divText.style.cssText = "color:black;flex-grow:1;font-size:20px;font-weight:600;";
    divBtn.style.cssText = "font-size:16px;font-weight:600;margin:8px;background-color:#FF4433;border: 2px solid black;border-radius:10px;"

    return newDiv;
}

// function displayBooks() {
//     //iterate over each book in the MyLibrary array
//     // for every updation whole array will be iterated
//     myLibrary.forEach(function display(book) {
//         //create a para element
//         let newDiv = createDivElement(book);
//         // let para = document.createElement("p");
//         // para.className = "suar";
//         // //attach the inner text for para
//         // para.innerText = book.title + ' ' + book.author + ' ' + book.pages + ' ' + 'pages';
//         //append the child to the container
//         container.append(newDiv)
//         // container./
//     })
// }

function displayNewBook(obj) {
    // console.log(obj)
    // let para = document.createElement("p");
    //     //attach the inner text for para
    // para.data = myLibrary.length-1;
    // para.innerText = obj.title + ' ' + obj.author + ' ' + obj.pages + ' ' + 'pages';
    let newDiv = createDivElement(obj);
    //append the child to the container
    container.append(newDiv)
}

// displayBooks();