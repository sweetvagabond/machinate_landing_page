import PropTypes from "prop-types"
import React from "react"
import iconMarketing from './assets/icons/icon-marketing.svg';
import iconSupply from './assets/icons/icon-supply.svg';
import iconOperations from './assets/icons/icon-operations.svg';
import iconFinance from './assets/icons/icon-finance.svg';
import iconPurchasing from './assets/icons/icon-purchasing.svg';
import iconHr from './assets/icons/icon-hr.svg';

export default class UseCaseCard extends React.Component {
  constructor(props) {
    super(props)

    this.toggleCard = this.toggleCard.bind(this)
    this.activateCard = this.activateCard.bind(this)
    this.deactivateCard = this.deactivateCard.bind(this)
    this.isActive = this.isActive.bind(this)

    this.state = {
      isActive: true
    }
  }

  toggleCard(e) {
    debugger;
  }

  activateCard() {

  }

  deactivateCard() {

  }

  isActive() {
    this.state.isActive
  }

  render() {
    return (
      // {isActive() && (
        <div className="card">
          <img src={this.props.icon} alt="" onClick={this.toggleCard} />
          <p>{this.props.title}</p>
          {/* <img src={iconMarketing} alt="" onClick={() => {console.log("hi")}} /> */}
        </div>
      // )}
    );
  }
}

UseCaseCard.propTypes = {
  // icon: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}
