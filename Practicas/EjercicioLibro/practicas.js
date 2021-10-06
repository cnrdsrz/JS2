class books {
    constructor(title, author, year, gender) {
        this.title = title
        this.author = author
        this.year = year
        this.gender = gender
    }
    bookInfo(){
        return(`${this.title} es un libro de ${this.author} publicado en ${this.year} del género ${this.gender}`)
    }
}

let clientBooks = []

    

        let title = prompt('Dime el nombre de tu primer libro')
        let author = prompt('Dime el nombre de tu autor preferido')
        let year = prompt('Dime el año de tu libro')
        let gender = prompt('Dime el género').toLowerCase

        if(title !== '' &&
        author !== '' &&
        !isNaN(year) && 
        year.length ===4 &&
        (gender === 'aventura' || gender === 'terror' || gender === 'fantasía')) {
             clientBooks.push(books(title, author, year, gender))}
   
   
    const showallBooks = () => {
        console.log(clientBooks)
    }

    showallBooks()
    






