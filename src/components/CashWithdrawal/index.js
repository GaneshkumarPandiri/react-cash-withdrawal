import {Component} from 'react'
import './index.css'
import DenominationsItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {value: 2000}

  withdrawAmount = (id, value) => {
    this.setState(item => ({value: item.value - value}))
  }

  render() {
    const {value} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container-main">
        <div className="bg-container-sub">
          <div className="icon-bg">
            <div className="icon-container">
              <p>S</p>
            </div>
            <p className="name-style">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="name-style">Your Balance</p>
            <p className="amount-style">{value}</p>
          </div>
          <p className="in-rupees">In Rupees</p>
          <p className="name-style">Withdraw</p>
          <p className="name-style">CHOOSE SUM (IN RUPEES)</p>
          <ul className="btn-container">
            {denominationsList.map(item => (
              <DenominationsItem
                denominationItem={item}
                withdrawAmount={this.withdrawAmount}
                key={item.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
