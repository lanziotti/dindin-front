import { useState } from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import './styles.css';

function AddTransactionModal({ open, handleClose }) {
    const [option, setOption] = useState('out');

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
                        <h2>Adicionar Registro</h2>
                        <div className='container-options'>
                            <button
                                className={`${option === 'out'
                                    ? 'option-off'
                                    : 'option-in'}
                                   btn-big`}
                                   onClick={() => setOption('in')}
                            >
                                Entrada
                            </button>
                            <button
                                className={`${option === 'out'
                                    ? 'option-out'
                                    : 'option-off'}
                               btn-big`}
                               onClick={() => setOption('out')}
                            >
                                Saída
                            </button>
                        </div>
                        <form>
                            <div className='container-inputs'>
                                <label>Valor</label>
                                <input type="text" />
                            </div>
                            <div className='container-inputs'>
                                <label>Categoria</label>
                                <select>
                                    <option>Categoria</option>
                                </select>
                            </div>
                            <div className='container-inputs'>
                                <label>Data</label>
                                <input type="text" />
                            </div>
                            <div className='container-inputs'>
                                <label>Descrição</label>
                                <input type="text" />
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

export default AddTransactionModal;