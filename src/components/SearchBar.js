import React from 'react';
import Savas from '../images/Savas.jpg';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <div class="ui labeled icon input">
              <div class="ui label">
                <img src={Savas} />
              </div>
              <input
                type="text"
                placeholder="Search..."
                value={this.state.term}
                onChange={this.onInputChange}
              />
              <i class="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
