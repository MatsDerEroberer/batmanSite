import { useNavigate } from 'react-router-dom';
import '../css/NavBar.css';

const NavBar = () => {

    const navigate = useNavigate()

    return(
        <div className="NavBar">
            <h2>Mats React Page</h2>
            
              <ul>
                <li>
                    <button className="nav-button"
                            onClick={() => navigate("/")}>
                        Home
                    </button>
                </li>
                <li>
                    <button className="nav-button"
                            onClick={() => navigate("/todo")}>
                        Todo
                    </button>
                </li>
                <li>
                    <button className="nav-button"
                            onClick={() => navigate("/quiz")}>
                        Quiz
                    </button>
                </li>
              </ul>   
            
        </div>
    )
}

export default NavBar