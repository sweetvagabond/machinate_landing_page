import React from "react"
import UseCaseCard from "./UseCaseCard.jsx";

import iconMarketing from './assets/icons/icon-marketing.svg';
import iconSupply from './assets/icons/icon-supply.svg';
import iconOperations from './assets/icons/icon-operations.svg';
import iconFinance from './assets/icons/icon-finance.svg';
import iconPurchasing from './assets/icons/icon-purchasing.svg';
import iconHr from './assets/icons/icon-hr.svg';

export default class UseCaseCards extends React.Component {
  constructor(props) {
    super(props)

    // this.toggleCard = this.toggleCard.bind(this)
    // this.activateCard = this.activateCard.bind(this)
    // this.deactivateCard = this.deactivateCard.bind(this)

    this.state = {
      active: true
    }
  }
  //
  // toggleCard(e) {
  //   debugger;
  // }
  //
  // activateCard() {
  //
  // }
  //
  // deactivateCard() {
  //
  // }

  render() {
    return (
      <div className="use-case-cards">
        <UseCaseCard
          icon={iconMarketing}
          title="I work in marketing"
          text="Description of use case"
        />
        <UseCaseCard
          icon={iconSupply}
          title="I work in supply chain"
          text="Description of use case"
        />
        <UseCaseCard
          icon={iconOperations}
          title="I work in operations"
          text="Description of use case"
        />
        <UseCaseCard
          icon={iconFinance}
          title="I work in finance"
          text="Description of use case"
        />
        <UseCaseCard
          icon={iconPurchasing}
          title="I work in purchasing"
          text="Description of use case"
        />
        <UseCaseCard
          icon={iconHr}
          title="I work in human resources"
          text="Description of use case"
        />
      </div>
    );
  }
}
