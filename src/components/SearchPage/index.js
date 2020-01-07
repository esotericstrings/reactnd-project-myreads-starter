import React from 'react'
import * as BooksAPI from '../../utils/BooksAPI'
import Book from '../Book/'
import './index.css'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

class SearchPage extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  };

  state = {
    query: "",
    books: []
  }

	updateShelf = (bookUpdate, shelf) => {
     BooksAPI.update(bookUpdate, shelf).then(response => {
      bookUpdate.shelf = shelf;
       console.log("update search shelf");
      this.setState(prevState => ({
        books: prevState.books.filter(book => book.id !== bookUpdate.id).concat(bookUpdate)
      }));
    });
}
filter = books => shelf => books.shelf(b => b.shelf === shelf)

searchBooks = (e) => {
  let query = e.target.value
  this.setState({query})
    if (query) {
   	  BooksAPI.search(query).then((books) => {
      this.setState({books})
	  const updatedBooks = books.map(book => {
        this.props.books.map(b => {
          if (b.id === book.id) {
            book.shelf = b.shelf;
          }
          return b;
        });
        return book;
      });
		this.setState({updatedBooks})
    })
    } else {
      this.setState({books:[]})
    }
}
  render() {
    return (
			<div className="search-books">
				<div className="search-books-bar">
                  <Link className="close-search" to='/'>Close</Link>	
                  <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" defaultValue={this.state.query} onChange={this.searchBooks} />
                  </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
						{ (!this.state.books.error && this.state.books.map ( book =>
							<Book book={book} key={book.id} shelf={book.shelf} updateShelf={this.props.updateShelf}/>
						))} 
					</ol>
                </div>
          </div>
    )
  }
}


export default SearchPage
