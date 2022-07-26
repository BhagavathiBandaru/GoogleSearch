import './index.css'

const SuggestionItem = props => {
  const {searchListData, updateSearchEle} = props
  const {suggestion} = searchListData

  const onClickOnSuggestion = () => {
    updateSearchEle(suggestion)
  }

  return (
    <li className="suggestions-items-list">
      <p className=" each-suggest-item">{suggestion}</p>
      <button type="button" className="button" onClick={onClickOnSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrowIcon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
