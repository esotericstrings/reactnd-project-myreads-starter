import React from 'react'
import './index.css'
import Header from '../Header/'
import BookShelf from '../Bookshelf/'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';

class IndexPage extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  };

filter = books => shelf => books.shelf(b => b.shelf === shelf)

  render() {
    return (
		<div className="list-books">
			<Header></Header>
            <div className="list-books-content">
              <BookShelf books={this.props.books.filter((book) => (book.shelf === "currentlyReading"))} title="Currently Reading" updateShelf={this.props.updateShelf}/>
			  <BookShelf books={this.props.books.filter((book) => (book.shelf === "wantToRead"))} title="Want to Read" updateShelf={this.props.updateShelf}/>
			  <BookShelf books={this.props.books.filter((book) => (book.shelf === "read"))} title="Read" updateShelf={this.props.updateShelf}/>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
		</div>
    )
  }
}

export default IndexPage