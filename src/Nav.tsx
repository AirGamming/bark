import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from "@fortawesome/free-solid-svg-icons";
import './css/nav.css'
export default function Nav() {
    return(
        <nav>
           <h4><FontAwesomeIcon icon={faDog} /> Bark</h4>

            <ul>
                <li>HOME</li>
                <li>TRENDING</li>
                <li>PREMIUM</li>
            </ul>
        </nav>
    )
}
