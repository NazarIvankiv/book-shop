fetch('../assets/books.json') //path to the file with json data
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data)
            for(let i = 0; i <data.length; i++){
                let book = document.createElement('div');
                let image = document.createElement('img');
                let author = document.createElement('p')
                let title = document.createElement('h3')
                let price = document.createElement('p')
                let info = document.createElement('div')
                price.innerHTML = `Price: ${data[i].price}`
                title.innerHTML = data[i].title
                author.innerHTML = data[i].author
                image.setAttribute('src',data[i].imageLink)
                book.append(image)
                info.append(author)
                info.append(title)
                info.append(price)
                book.append(info)
                div.append(book)
                book.className ='book'
                image.className ='image'
                author.className ='author'
                title.className = 'title'
                price.className = 'price'
                info.className = 'info'
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


