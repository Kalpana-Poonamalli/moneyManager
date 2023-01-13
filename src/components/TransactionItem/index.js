// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachItem} = props
  const {title, amount, type} = eachItem
  return (
    <li className="t-container">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
    </li>
  )
}

export default TransactionItem
