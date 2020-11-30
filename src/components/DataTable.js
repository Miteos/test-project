import React from 'react'
import {inject, observer, Observer} from 'mobx-react'

 @inject('rootStore')
 @observer
 class DataTable extends React.Component{
     store = this.props.rootStore.tableStore;
         render(){
         return (
                 <div className="inputs">
                     <table className="styled-table">
                         <thead>
                         <tr>
                             <th className="clickable" onClick={() =>this.store.sortById()}>ID</th>
                             <th className="clickable" onClick={() => this.store.sortByAuthor()}>Author</th>
                             <th>Title</th>
                             <th>Status</th>
                             <th></th>
                         </tr>
                         </thead>
                         <tbody>
                         {this.store.ordered.map((b, i) => (
                             <tr key={i}>
                                 <td>{b.id}</td>
                                 <td>{b.author}</td>
                                 <td>{b.title}</td>
                                 <td>{b.status}</td>
                                 <td className="clickable" onClick={() => this.store.removeItem(b.id)}>x</td>
                             </tr>
                         ))}
                         </tbody>
                     </table>
                 </div>
         )
}
}

export default DataTable
