import {useState} from 'react'
import { IoMdMenu as Menu} from "react-icons/io";
import { IoMdClose as Close } from "react-icons/io";
import './Sidebar.css';

function Sidebar() {

    const [isOpen, setIsOpen] = useState(false);

    function toggle(){
        setIsOpen(!isOpen);
    }
  return (
    <div>
        <div className={`menu-btn ${isOpen ? 'hide' : ''}`} onClick={toggle}> 
            <Menu />
        </div>
        <div className={`sidebar-container ${!isOpen ? 'hide' : ''}`} onClick={toggle}>
            <div className="close" onClick={toggle}>
                <Close className='close-btn'/>
            </div>
            <div className="sidebar active">
                <div className="logo">
                    <h1>Snapgram</h1>
                </div>
                <div className="nav-links-container">
                    <div className="nav-links">
                        <div className="link"><a href="#">Home</a></div>
                        <div className="link"><a href="#">Blog</a></div>
                        <div className="link"><a href="#">About</a></div>
                        <div className="link"><a href="#">Contact</a></div>
                    </div>
                </div>
                <div className="nav-auth-container">
                    <div className="nav-auth">
                        <div className="btn">
                            <a href="#">
                                <button>Login</button>
                            </a>
                        </div>
                        <div className="btn">
                            <a href="#">
                                <button>Sign Up</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;