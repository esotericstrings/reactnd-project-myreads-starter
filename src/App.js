import React from 'react'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IndexPage from './components/IndexPage/'
import SearchPage from './components/SearchPage/'
import NotFoundPage from './components/NotFoundPage/'


class BooksApp extends React.Component {
  state= {
  	books: []
  };

  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({ books })
  }

updateShelf = (bookUpdate, shelf) => {
     BooksAPI.update(bookUpdate, shelf).then(response => {
      bookUpdate.shelf = shelf;
       console.log("update shelf");
      this.setState(prevState => ({
        books: prevState.books.filter(book => book.id !== bookUpdate.id).concat(bookUpdate)
      }));
    });
}

  render() {
    
    return (
       <Router>
        <Switch>
          <Route exact path="/" render={(props) => <IndexPage books={this.state.books} updateShelf={this.updateShelf}/>}/>
          <Route path="/search" render={(props) => <SearchPage books={this.state.books} updateShelf={this.updateShelf}/>}/>
          <Route component={NotFoundPage} />
        </Switch>
	   </Router>  
	)
  }
}

export default BooksApp