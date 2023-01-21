// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <li className="mm-card-container">
      <div className="mm-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="mm-img"
        />
        <div className="f">
          <p className="mm-card-heading">Your Balance</p>
          <p className="mm-card-para" data-testid="balanceAmount">
            Rs.{balance}
          </p>
        </div>
      </div>
      <div className="mm-card1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="mm-img"
        />
        <div className="f">
          <p className="mm-card-heading">Your Income</p>
          <p className="mm-card-para" data-testid="incomeAmount">
            Rs.{income}
          </p>
        </div>
      </div>
      <div className="mm-card2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="mm-img"
        />
        <div className="f">
          <p className="mm-card-heading">Your Expenses</p>
          <p className="mm-card-para" data-testid="expensesAmount">
            Rs.{expenses}
          </p>
        </div>
      </div>
    </li>
  )
}

export default MoneyDetails
