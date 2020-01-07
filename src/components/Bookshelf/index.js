import React from 'react'
import Book from '../Book/'
import {PropTypes} from 'prop-types'
import './index.css'

class BookShelf extends React.Component {
  
  static propTypes = {
     books: PropTypes.array.isRequired,
     updateShelf: PropTypes.func.isRequired
  }

render() {
	const { books } = this.props

    return (
		<div className="bookshelf">
			<h2 className="bookshelf-title">{this.props.title}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{books.map((book, index) => (<Book book={book} key={book.id} updateShelf={this.props.updateShelf}/>))}
				</ol>
			</div>
		</div>
     )
  }
}

export default BookShelf