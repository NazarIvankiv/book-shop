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
                console.log(information)
                information.className = 'information'
                closeinfo.className = 'closeinfo'
                infodiv.className = 'infodiv'
                showMore.addEventListener('click', ShowMore)
                function ShowMore(){
                    info.append(infodiv)
                }
            }
        })
let container = document.createElement('main')
document.body.append(container)
let div = document.createElement('div');
container.append(div);
let div2 = document.createElement('div');
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

