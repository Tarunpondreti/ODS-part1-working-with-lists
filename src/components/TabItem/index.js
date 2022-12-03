import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClicklist = () => {
    updateActiveTabId(tabId)
  }
  const active = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${active}`}
        onClick={onClicklist}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
