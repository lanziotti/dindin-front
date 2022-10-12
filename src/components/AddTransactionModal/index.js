import { useEffect, useState } from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import './styles.css';
import api from '../../services/api';
import { getItem } from '../../utils/storage';

const defaultForm = {
    value: '',
    category: {
        id: '',
        name: ''
    },
    date: '',
    description: ''
}


function AddTransactionModal({ open, handleClose }) {
    const token = getItem('token');

    const [option, setOption] = useState('out');
    const [categories, setCategories] = useState([]);
    const [form, setForm] = useState({ ...defaultForm });

    async function loadCategories() {
        try {
            const response = await api.get('/categoria', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const orderedCategories = response.data.sort((a, b) => a - b);

            setCategories(orderedCategories);

        } catch (error) {
            console.log(error.response);
        }
    }

    function handleChangeForm({ target }) {
        setForm({ ...form, [target.name]: [target.value] });
    }

    function handleChangeSelect({ target }) {
        const currentyCategory = categories.find((categorie) => categorie.descricao === categorie.value);

        if (!currentyCategory) {
            return;
        }

        setForm({ ...form, category: { id: currentyCategory.id, name: currentyCategory.descricao } });
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    useEffect(() => {
        loadCategories();
    }, []);


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
                        <form onSubmit={handleSubmit}>
                            <div className='container-inputs'>
                                <label>Valor</label>
                                <input
                                    name='value'
                                    type="text"
                                    value={form.value}
                                    onChange={handleChangeForm}
                                    required
                                />
                            </div>
                            <div className='container-inputs'>
                                <label>Categoria</label>
                                <select
                                    name='category'
                                    value={form.category.name}
                                    onChange={handleChangeSelect}
                                    required
                                >
                                    <option>Selecione</option>
                                    {categories.map((categorie) => (
                                        <option
                                            key={categorie.id}
                                            value={categorie.descricao}
                                        >
                                            {categorie.descricao}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className='container-inputs'>
                                <label>Data</label>
                                <input
                                    name='date'
                                    type="text"
                                    value={form.date}
                                    onChange={handleChangeForm}
                                    required
                                />
                            </div>
                            <div className='container-inputs'>
                                <label>Descrição</label>
                                <input
                                    name='description'
                                    type="text"
                                    value={form.description}
                                    onChange={handleChangeForm}
                                    required
                                />
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