import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {id, name, imageUrl} = teamDetails
    // console.log(teamDetails)
    //   console.log(name)
    return (
      <Link to={`/team-matches/${id}`} className="team-item-link">
        <li className="displaying-eachIpl-Team">
          <img src={imageUrl} alt={`${name}`} className="each-iplTeam-image" />
          <p className="iplTeam-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
