import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes'

class Quotes extends Component {

  render() {
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props;
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quotes.map(quote => <QuoteCard key={quote.id}
                removeQuote={removeQuote}
                upvoteQuote={upvoteQuote}
                downvoteQuote={downvoteQuote}
                quote={quote} />)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//add arguments to connect as needed
const mSTP = state => {
  return ({
    quotes: state.quotes
  })
}

export default connect(mSTP, { removeQuote, upvoteQuote, downvoteQuote })(Quotes)

