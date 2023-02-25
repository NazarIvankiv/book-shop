

let div2 = document.createElement('div');
const BookList = document.createElement('div')
BookList.className = 'BookList'
const Orderplace = document.createElement('div')
div2.append(BookList)
div2.append(Orderplace)
Orderplace.innerHTML = 'qwertyu'



fetch('../assets/books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            for(let i = 0; i <data.length; i++){
                const book = document.createElement('div');
                const image = document.createElement('img');
                const author = document.createElement('p')
                const title = document.createElement('h3')
                const price = document.createElement('p')
                const info = document.createElement('div')
                const information = document.createElement('p')
                const showMore = document.createElement('button')
                const addToBag = document.createElement('button')
                const buttons = document.createElement('div')
                const infodiv = document.createElement('div')
                const closeinfo = document.createElement('button')
                price.innerHTML = `Price: ${data[i].price}$`
                title.innerHTML = data[i].title
                author.innerHTML = data[i].author
                image.setAttribute('src',data[i].imageLink)
                information.innerHTML = data[i].description
                showMore.innerHTML ='Show more'
                addToBag.innerHTML ='Add to bag'
                closeinfo.innerHTML = '&#10006;'
                let orderBook = document.createElement('div')
                let orderinfo = document.createElement('div')
                let orderAuthor = document.createElement('p')
                let orderImgLink = document.createElement('img')
                let orderBookTitle = document.createElement('p')
                let removeOrder = document.createElement('button')
                orderBook.className ='orderBook'
                orderBook.append(orderImgLink)
                orderBook.append(orderinfo)
                orderBook.append(removeOrder)
                orderinfo.append(orderAuthor)
                orderinfo.append(orderBookTitle)
                orderAuthor.innerHTML = data[i].author
                removeOrder.innerHTML = '&#10006;'
                book.append(image)
                info.append(author)
                info.append(title)
                info.append(price)
                info.append(buttons)
                buttons.append(showMore)
                buttons.append(addToBag)
                book.append(info)
                div.append(book)
                infodiv.append(closeinfo)
                infodiv.append(information)
                book.className ='book'
                image.className ='image'
                author.className ='author'
                title.className = 'title'
                price.className = 'price'
                info.className = 'info'
                showMore.className = 'showmore'
                addToBag.className = 'addtobag'
                buttons.className = 'buttons'
                information.className = 'information'
                closeinfo.className = 'closeinfo'
                infodiv.className = 'infodiv'
                removeOrder.addEventListener('click',removeOrderBook)
                function removeOrderBook(){
                    orderBook.remove()
                    delete orderset[i]
                    addToBag.addEventListener('click',addtoBag)
                }
                showMore.addEventListener('click', ShowMore)
                function ShowMore(){
                    info.append(infodiv)
                }
                closeinfo.addEventListener('click',closeInfo)
                function closeInfo(){
                    infodiv.remove()
                }
                addToBag.addEventListener('click',addtoBag)
                function addtoBag(){
                    BookList.append(orderBook)
                    orderset.push(data[i])
                    addToBag.removeEventListener('click', addtoBag)
                }
                addToBag.addEventListener('click',Countclick)
                function Countclick(){
                    orderBooks.push(data[i].price);   
                }
                book.setAttribute('draggable', true)
                book.addEventListener('dragstart',()=>{})
                book.addEventListener("dragend",()=>{} );
                BookList.addEventListener("dragover", (event) => {
                    event.preventDefault();
                });
                BookList.addEventListener("dragenter",()=>{});
                BookList.addEventListener("dragleave",()=>{});
                BookList.addEventListener("drop", addtoBag);
            }
        })
let orderBooks = []
console.log(orderBooks)
let container = document.createElement('main')
document.body.append(container)
let div = document.createElement('div');
container.append(div);
let orderset = []
console.log(orderset)
container.append(div2);
div.className ='catalog'
div2.className = 'order'
let header = document.createElement('header');
let h1 = document.createElement('h1');
document.body.prepend(header);
header.append(h1);
document.body.className = 'body';
header.className ='header';
h1.innerHTML = 'Book shop';
let orderTitle = document.createElement('h2')
orderTitle.innerHTML = 'Order Books'
div2.prepend(orderTitle)
let catalogTitle = document.createElement('h2')
catalogTitle.innerHTML = 'Book catalog'
div.prepend(catalogTitle)
