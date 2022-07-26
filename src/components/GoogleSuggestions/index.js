import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  updateSearchEle = value => {
    this.setState({
      searchInput: value,
    })
  }

  onClickSearchItem = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const itemListToSearch = suggestionsList.filter(eachSearch =>
      eachSearch.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="google-container-to-search">
          <img
            className="googleImg"
            alt="google logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          />

          <div className="search-bar-container">
            <div className="input-container">
              <img
                alt="search icon"
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />

              <input
                type="search"
                className="search-element"
                placeholder="Search Google"
                onChange={this.onClickSearchItem}
                value={searchInput}
              />
            </div>
            <ul className="items-list">
              {itemListToSearch.map(eachItem => (
                <SuggestionItem
                  key={eachItem.id}
                  searchListData={eachItem}
                  updateSearchEle={this.updateSearchEle}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
