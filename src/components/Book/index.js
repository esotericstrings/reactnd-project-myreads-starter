import React from 'react'
import {PropTypes} from 'prop-types'
import './index.css'
import nothumbnail from './no-thumbnail.jpg'

class Book extends React.PureComponent {
  static propTypes = {
    book: PropTypes.object.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

updateShelf = (e) => {
  this.props.updateShelf(this.props.book, e.target.value);
}

  render() {
    const { book } = this.props

    const bookCover = book.imageLinks ? book.imageLinks.thumbnail : nothumbnail;
    const bookTitle = book.title;
	const shelf = book.shelf ? book.shelf : 'none';

    return (
      <li>
     <div className="book">
       <div className="book-top">
         <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${bookCover})` }}></div>
         <div className="book-shelf-changer">
         <select onChange={this.updateShelf} value={shelf}>
           <option value="" disabled>Move to...</option>
           <option value="currentlyReading">Currently Reading</option>
           <option value="wantToRead">Want to Read</option>
           <option value="read">Read</option>
           <option value="none">None</option>
         </select>

         </div>
       </div>
       <div className="book-title">{bookTitle}</div>
	   {book.authors && book.authors.map((author, index) => (
		<div className="book-authors" key={index}>
			{author}
		</div>
		))}
     </div>
	</li>
     )
  }
}

export default Book