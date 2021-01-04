import {action, autorun, computed, observable, runInAction, set} from "mobx";
import {BookService} from "../components/services/BookService";


export class TableViewStore {
    @observable books = [];

    constructor(rootStore) {
        this.rootStore = rootStore;
        this.api = new BookService();

    }

    statusArray = ['All', 'Completed', 'To-Read'];
    sortArray = ['Unsorted', 'Ascending', 'Descending'];
    @observable  apiData = [];
    @observable  status = 'All';
    @observable  filteredList = [];
    @observable  sorted = 'Unsorted';
    @observable  itemsPerPage = 5;
    @observable  lastPage = '';
    @observable  error = '';
    @observable  page = 1;
    @observable  loading = true;


    @action  getData = async (url) => {
        this.loading = true;
        try {
            if (this.status === 'All' && this.sorted === 'Unsorted') {
                const data = await this.api.get('books');
                const toArray = Object.keys(data).map(i => data[i]);
                this.apiData = toArray;
            }
            if (this.status === 'Completed' || this.status === 'To-Read') {
                const data = await this.api.find(`?&orderBy="status"&equalTo="${this.status}"`);
                const toArray = Object.keys(data).map(i => data[i]);
                this.apiData = toArray;

            } else if (this.sorted !== 'Unsorted' && this.status === 'All') {
                const data = await this.api.find(`?&orderBy="author"`);
                const toArray = Object.keys(data).map(i => data[i]);
                const desc = toArray.slice().sort((a, b) => a.author.localeCompare(b.author));
                const asc = toArray.slice().sort((a, b) => b.author.localeCompare(a.author));
                if (this.sorted === 'Ascending') {
                        this.apiData = asc;
                } else this.apiData = desc
            }
        } catch (error) {
                this.error = "error";
        } finally {
                this.paginate();
                this.loading = false
        }
    };


    @action deleteBook = async (id) => {
        try {
            this.loading = true;
            const getNode = await this.api.find(`?&orderBy="id"&equalTo="${id}"`);
            const forUrl = Object.keys(getNode)[0];
            const response = await this.api.delete(forUrl);
            if (response.status === 204) {
                this.loading = false
            }
        } catch (error) {
                this.error = "error";
        } finally {
                this.getData()
        }
    };

    @action filter() {
        try {
            this.sorted = 'Unsorted'
        } catch (e) {
            this.error = 'error'
        }

    }

    @action  handleFilterStatus = (e) => {
        this.status = e.target.value;
        this.filter()
        this.getData()
    };

    @action doSort() {
        this.loading = true;
        try {
            if (this.sorted === 'Unsorted') {
                this.resetFilters();
                this.loading = false
            }
            if (this.sorted === 'Ascending') {
                this.status = 'All'
                this.loading = false
            }
            if (this.sorted === 'Descending') {
                this.status = 'All';
                this.loading = false
            }
        } catch (e) {
            this.error = 'error'
        }
    }

    @action  handleSort = (e) => {
        this.sorted = e.target.value;
        this.doSort()
        this.getData();

    };

    @action paginate() {
        const indexLastBook = this.page * this.itemsPerPage;
        const indexFirstBook = indexLastBook - this.itemsPerPage;
        this.filteredList = this.apiData.slice(indexFirstBook, indexLastBook);
    }


    @action handlePagination = value => {
        this.page = value;
        this.getData()

    };
    @action resetFilters = () => {
        this.getData();
        this.status = 'All';
        this.sorted = 'Unsorted'
    };
}



