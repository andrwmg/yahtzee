import React, { Component } from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import { ones, twos, threes, fours, fives, sixes, threeOfKind, fourOfKind, fullHouse, smallStraight, largeStraight, yahtzee, chance } from './Rules';


class ScoreTable extends Component {
  constructor(props){
    super(props);
    this.getTotalScore = this.getTotalScore.bind(this)
  }
  getTotalScore() {
    const {scores} = this.props
    let total = 0
    for (let key in scores) {
      if (scores[key]){
        total += scores[key]
      }
    }
    return total
  }
  render() {
    const { scores, doScore, rolling } = this.props;

    return (
      <div className="ScoreTable">
        <section className="ScoreTable-section">
          <h2>Upper</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow name="Ones" rolling= {rolling} desc={ones.desc} score={scores.ones} doScore={evt => doScore("ones", ones.evalRoll)} />
              <RuleRow name="Twos" rolling= {rolling} desc={twos.desc} score={scores.twos} doScore={evt => doScore("twos", twos.evalRoll)} />
              <RuleRow name="Threes" rolling= {rolling} desc={threes.desc} score={scores.threes} doScore={evt => doScore("threes", threes.evalRoll)} />
              <RuleRow name="Fours" rolling= {rolling} desc={fours.desc} score={scores.fours} doScore={evt => doScore("fours", fours.evalRoll)} />
              <RuleRow name="Fives" rolling= {rolling} desc={fives.desc} score={scores.fives} doScore={evt => doScore("fives", fives.evalRoll)} />
              <RuleRow name="Sixes" rolling= {rolling} desc={sixes.desc} score={scores.sixes} doScore={evt => doScore("sixes", sixes.evalRoll)} />
            </tbody>
          </table>
        </section>
        <section className="ScoreTable-section ScoreTable-section-lower">
          <h2>Lower</h2>
          <table cellSpacing="0">
            <tbody>
              <RuleRow rolling= {rolling} name="Three of Kind" desc={threeOfKind.desc} score={scores.threeOfKind} doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)} />
              <RuleRow rolling= {rolling} name="Four of Kind" desc={fourOfKind.desc} score={scores.fourOfKind} doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)} />
              <RuleRow rolling= {rolling} name="Full House" desc={fullHouse.desc} score={scores.fullHouse} doScore={evt => doScore("fullHouse", fullHouse.evalRoll)} />
              <RuleRow rolling= {rolling} name="Small Straight" desc={smallStraight.desc} score={scores.smallStraight} doScore={evt => doScore("smallStraight", smallStraight.evalRoll)} />
              <RuleRow rolling= {rolling} name="Large Straight" desc={largeStraight.desc} score={scores.largeStraight} doScore={evt => doScore("largeStraight", largeStraight.evalRoll)} />
              <RuleRow rolling= {rolling} name="Yahtzee" desc={yahtzee.desc} score={scores.yahtzee} doScore={evt => doScore("yahtzee", yahtzee.evalRoll)} />
              <RuleRow rolling= {rolling} name="Chance" desc={chance.desc} score={scores.chance} doScore={evt => doScore("chance", chance.evalRoll)} />
            </tbody>
          </table>
        </section>
        <h2>Total Score: {this.getTotalScore()}</h2>
      </div>
    )
  }
}

export default ScoreTable;