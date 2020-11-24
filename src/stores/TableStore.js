export function createTableStore() {
    return{
        tableSize: 5,
        currentPage : 1,
        pageNumber:'',
        headers:['id','author','title','status'],
        data:[
            {id:1, author:'Brandon Sanderson', title:'The Way of Kings', status:'completed'},
            {id:2, author:'Brandon Sanderson', title:'Words of Radiance', status:'completed'},
            {id:3, author:'Brandon Sanderson', title:'Oathkeeper', status:'to-read'},
            {id:4, author:'Vernor Vinge', title:'A Fire Upon the Deep', status:'completed'},
            {id:5, author:'Vernor Vinge', title:'Rainbows End', status:'to-read'},
            {id:6, author:'Vernor Vinge', title:'A Deepness in the Sky', status:'completed'},
            {id:7, author:'Robin Hobb', title: 'Assassins Fate', status:'completed'},
            {id:8, author:'Aleron Kong', title: 'The Land:Predators', status:'to-read'},
        ],
        // filterByStatus(value){
        //     console.log(value);
        // },
        sortById(){
            this.data.reverse();
        },
        sortByAuthor(){
            this.data.sort((a, b) => a.author.localeCompare(b.author))
        },
        addBook(id,author,title,status){
            this.data.push({
                id,
                author,
                title,
                status
            })
        },
        removeBook(id){
          this.data = this.data.filter(b => b.id !== id)
        },
        paginate(pageNumber){
           this.currentPage = pageNumber;
           console.log(this.currentPage)
        },
        get paginatedBooks(){
            const indexLastBook = this.currentPage * this.tableSize;
            const indexFirstBook = indexLastBook - this.tableSize;
            return  this.data.slice( indexFirstBook,indexLastBook);
            },

    }
}




