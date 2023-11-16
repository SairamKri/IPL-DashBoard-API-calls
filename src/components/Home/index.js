import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

const apiUrl = 'https://apis.ccbp.in/ipl'

class Home extends Component {
  state = {iplTeamsData: [], isLoading: true}

  componentDidMount() {
    this.getRequiredTeamsData()
  }

  getRequiredTeamsData = async () => {
    const response = await fetch(apiUrl)
    const responseData = await response.json()
    // console.log(responseData)
    // console.log(teams)
    const updatedIPLTeamsData = responseData.teams.map(eachData => ({
      name: eachData.name,
      imageUrl: eachData.team_image_url,
      id: eachData.id,
    }))
    this.setState({iplTeamsData: updatedIPLTeamsData, isLoading: false})
  }

  getListOfIPLTeams = () => {
    const {iplTeamsData} = this.state
    // console.log(iplTeamsData)
    return (
      <ul className="ipl-Teams-data-container">
        {iplTeamsData.map(eachTeam => (
          <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  renderReactLoader = () => (
    <div testid="loader" className="loader-spinner-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="main-container">
        <div className="logo-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? this.renderReactLoader() : this.getListOfIPLTeams()}
      </div>
    )
  }
}

export default Home
