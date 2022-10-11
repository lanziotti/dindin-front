import CloseIcon from '../../assets/close-icon.svg';
import './styles.css';

function ProfileModal({ open, handleClose }) {
    return (
        <>
            {open &&
                <div className='backdrop'>
                    <div className='modal'>
                        <img
                            className='close-button'
                            src={CloseIcon}
                            alt="close-button"
                            onClick={handleClose}
                        />
                        <h2>Editar Perfil</h2>
                        <form>
                            <div className='container-inputs'>
                                <label>Nome</label>
                                <input type="text" />
                            </div>
                            <div className='container-inputs'>
                                <label>E-mail</label>
                                <input type="text" />
                            </div>
                            <div className='container-inputs'>
                                <label>Senha</label>
                                <input type="password" />
                            </div>
                            <div className='container-inputs'>
                                <label>Confirmação de senha</label>
                                <input type="password" />
                            </div>
                            <button className='btn-purple btn-small'>
                                Confirmar
                            </button>
                        </form>
                    </div>
                </div>
            }
        </>
    );
}

export default ProfileModal;