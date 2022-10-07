import './styles.css';
import Logo from '../../assets/logo.svg';
import Profile from '../../assets/profile.svg';
import Logout from '../../assets/logout.svg';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    function handleLogout() {
        navigate('/');
    }

    return (
        <header>
            <div className='width-limit content-header'>
                <img src={Logo} alt="Logo" />
                <div className='container-sign-out'>
                    <div className='profile-area'>
                        <img src={Profile} alt="Profile" />
                        <strong>Rodrigo</strong>
                        <img
                         src={Logout}
                          alt="Logout"
                           className='sign-out'
                           onClick={handleLogout}
                            />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;