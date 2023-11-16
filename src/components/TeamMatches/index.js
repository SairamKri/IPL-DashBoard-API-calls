import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    isSpinnerLoading: true,
    matchesData: {},
  }

  componentDidMount() {
    this.getRecentMatchData()
  }

  getRecentMatchData = async () => {
    // console.log(this.props)
    const {match} = this.props
    // console.log(match)
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const fetchedData = await response.json()
    console.log(fetchedData)

    const updatedFetchedData = {
      teamBannerUrl: fetchedData.team_banner_url,

      latestMatchDetails: {
        competingTeam: fetchedData.latest_match_details.competing_team,
        competingTeamLogo: fetchedData.latest_match_details.competing_team_logo,
        date: fetchedData.latest_match_details.date,
        firstInnings: fetchedData.latest_match_details.first_innings,
        id: fetchedData.latest_match_details.id,
        manOfTheMatch: fetchedData.latest_match_details.man_of_the_match,
        matchStatus: fetchedData.latest_match_details.match_status,
        result: fetchedData.latest_match_details.result,
        secondInnings: fetchedData.latest_match_details.second_innings,
        umpires: fetchedData.latest_match_details.umpires,
        venue: fetchedData.latest_match_details.venue,
      },

      recentMatches: fetchedData.recent_matches.map(eachLatest => ({
        competingTeam: eachLatest.competing_team,
        competingTeamLogo: eachLatest.competing_team_logo,
        date: eachLatest.date,
        firstInnings: eachLatest.first_innings,
        id: eachLatest.id,
        manOfTheMatch: eachLatest.man_of_the_match,
        matchStatus: eachLatest.match_status,
        result: eachLatest.result,
        secondInnings: eachLatest.second_innings,
        umpires: eachLatest.umpires,
        venue: eachLatest.venue,
      })),
    }
    this.setState({matchesData: updatedFetchedData, isSpinnerLoading: false})
  }

  renderTeamMatches = () => {
    const {matchesData} = this.state
    const {teamBannerUrl, latestMatchDetails} = matchesData
    return (
      <div className="team-matches-container">
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-image"
        />
        <LatestMatch latestMatchDetails={latestMatchDetails} />
        {this.renderMatchCard()}
      </div>
    )
  }

  renderMatchCard = () => {
    const {matchesData} = this.state
    const {recentMatches} = matchesData
    return (
      <ul className="recent-matches-container">
        {recentMatches.map(eachMatch => (
          <MatchCard matchCardDetails={eachMatch} key={eachMatch.id} />
        ))}
      </ul>
    )
  }

  renderLoaderSpinner = () => (
    <div className="loader-spinner" testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SRH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {isSpinnerLoading} = this.state
    const className = `TeamMatches-main-container ${this.getRouteClassName()}`

    return (
      <div className={className}>
        {isSpinnerLoading
          ? this.renderLoaderSpinner()
          : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
