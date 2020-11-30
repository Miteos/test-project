import {action, computed, makeAutoObservable, observable} from "mobx";

export class TableViewStore {
        constructor(rootStore) {
            this.rootStore = rootStore;
            makeAutoObservable(this)
        }

     data=[
        {id:1, author:'Brandon Sanderson', title:'The Way of Kings', status:'completed'},
        {id:2, author:'Brandon Sanderson', title:'Words of Radiance', status:'completed'},
        {id:3, author:'Brandon Sanderson', title:'Oathkeeper', status:'to-read'},
        {id:4, author:'Vernor Vinge', title:'A Fire Upon the Deep', status:'completed'},
        {id:5, author:'Vernor Vinge', title:'Rainbows End', status:'to-read'},
        {id:6, author:'Vernor Vinge', title:'A Deepness in the Sky', status:'completed'},
        {id:7, author:'Robin Hobb', title: 'Assassins Fate', status:'completed'},
        {id:8, author:'Aleron Kong', title: 'The Land:Predators', status:'to-read'},
    ];


    removeItem(id){
        this.data = this.data.filter(b => b.id !== id)
    }
        // headers:['id','author','title','status'],

       @action
       filterByStatus(value){
            console.log(value);
        };
       @action
       sortById(){
            this.data.reverse();
        };
       @action
       sortByAuthor(){
            this.data.sort((a, b) => a.author.localeCompare(b.author))
        };
       // @action
       // removeBook(id){
       //    this.rootStore.data = this.rootStore.data.filter(b => b.id !== id)
       //  };
       //

    @computed get ordered(){
        return this.rootStore.paginationViewStore.paginated
    };
}




