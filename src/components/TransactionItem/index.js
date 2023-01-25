// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachItem, deletedItemsList} = props
  const {id, title, amount, type} = eachItem

  const itemsList = () => {
    deletedItemsList(id, amount, type)
  }

  return (
    <li className="t-container">
      <p className="items">{title}</p>
      <p className="items">Rs {amount}</p>
      <p className="items">{type}</p>
      <button
        type="button"
        className="dlt"
        onClick={itemsList}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
