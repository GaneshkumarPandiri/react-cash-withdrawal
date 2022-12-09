// Write your code here
import './index.css'

const DenominationsItem = props => {
  const {denominationItem, withdrawAmount} = props
  const {id, value} = denominationItem

  const withdraw = () => {
    withdrawAmount(id, value)
  }

  return (
    <li className="list-style">
      <button type="button" className="button-style" onClick={withdraw}>
        {value}
      </button>
    </li>
  )
}

export default DenominationsItem
