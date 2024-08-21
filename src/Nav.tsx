import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faStar, faHouse, faUser} from "@fortawesome/free-solid-svg-icons";
import './css/nav.css'
export default function Nav() {
    return(
        <nav>
           <h4><FontAwesomeIcon icon={faDog} /> Bark</h4>

            <ul>
                <li className='active'><FontAwesomeIcon icon={faHouse} /> HOME</li>
                <li><FontAwesomeIcon icon={faUser} /> PROFILE</li>
                <li><FontAwesomeIcon icon={faStar}/> PREMIUM</li>
            </ul>
        </nav>
    )
}
