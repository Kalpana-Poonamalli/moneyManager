import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    income: 0,
    expenses: 0,
    title: '',
    amount: '',
    type: transactionTypeOptions[0].displayText,
    historyList: [],
  }

  titleChange = event => {
    this.setState({title: event.target.value})
  }

  amountChange = event => {
    this.setState({amount: event.target.value})
  }

  typeChange = event => {
    this.setState({type: event.target.value})
  }

  isButtonClick = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    const newHistory = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      historyList: [...prevState.historyList, newHistory],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].displayText,
    }))

    if (type === transactionTypeOptions[0].displayText) {
      this.setState(prevState => ({
        income: prevState.income + parseInt(amount),
      }))
    } else if (type === transactionTypeOptions[1].displayText) {
      this.setState(prevState => ({
        expenses: prevState.expenses + parseInt(amount),
      }))
    }
  }

  deletedItemsList = id => {
    const {historyList} = this.state
    const availableList = historyList.filter(eachItem => eachItem.id !== id)
    this.setState({historyList: availableList})
  }

  render() {
    const {income, expenses, title, amount, type, historyList} = this.state
    const balance = income - expenses

    return (
      <div className="mm-container">
        <div className="mm-inner-container">
          <h1 className="mm-heading">Hi, Richard</h1>
          <p className="mm-para">
            Welcome back to your{' '}
            <span className="mm-para-color">Money Manager</span>
          </p>
        </div>
        <ul>
          <MoneyDetails balance={balance} income={income} expenses={expenses} />
        </ul>
        <div className="mm-bottom-container">
          <div className="mm-transaction-container">
            <h1 className="mm-transaction-heading">Add Transaction</h1>
            <div className="label-input">
              <label htmlFor="title" className="title">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={this.titleChange}
                className="input"
              />
            </div>
            <div className="label-input">
              <label htmlFor="amount" className="title">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                value={amount}
                onChange={this.amountChange}
                className="input"
              />
            </div>
            <div className="label-input">
              <label htmlFor="type" className="title">
                TYPE
              </label>
              <select
                id="type"
                className="input"
                value={type}
                onChange={this.typeChange}
              >
                {transactionTypeOptions.map(eachItem => (
                  <option
                    className="option"
                    key={eachItem.optionId}
                    value={eachItem.optionId}
                  >
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              className="button"
              onClick={this.isButtonClick}
            >
              Add
            </button>
          </div>
          <div className="mm-history-container">
            <h1 className="hi">History</h1>
            <div className="fl">
              <p className="h">Title</p>
              <p className="h">Amount</p>
              <p className="h">Type</p>
            </div>
            {historyList.map(eachItem => (
              <TransactionItem
                eachItem={eachItem}
                key={eachItem.id}
                deletedItemsList={this.deletedItemsList}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
