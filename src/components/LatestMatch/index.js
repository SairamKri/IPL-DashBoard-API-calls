import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatchDetails} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      result,
      secondInnings,
      umpires,
      venue,
    } = latestMatchDetails
    return (
      <>
        <h1 className="latest-match-heading">Latest Matches</h1>
        <div className="latestMatch-container">
          <div className="first-container">
            <p className="team-name">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue-name">{venue}</p>
            <p className="venue-name">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="opposition-team-logo"
          />
          <div className="last-container">
            <p className="last-container-subHeading">First Innings</p>
            <p className="subHeading-value">{firstInnings}</p>
            <p className="last-container-subHeading">Second Innings</p>
            <p className="subHeading-value">{secondInnings}</p>
            <p className="last-container-subHeading">Man Of The Match</p>
            <p className="subHeading-value">{manOfTheMatch}</p>
            <p className="last-container-subHeading">Umpires</p>
            <p className="subHeading-value">{umpires}</p>
          </div>

          {/* <div className="last-container">
            <p className="last-container-subHeading">Second Innings</p>
            <p className="subHeading-value">{secondInnings}</p>
          </div>

          <div className="last-container">
            <p className="last-container-subHeading">Man Of The Match</p>
            <p className="subHeading-value">{manOfTheMatch}</p>
          </div>

          <div className="last-container">
            <p className="last-container-subHeading">Umpires</p>
            <p className="subHeading-value">{umpires}</p>
          </div> */}
        </div>
      </>
    )
  }
}

export default LatestMatch
