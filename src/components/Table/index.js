import { useState } from 'react';
import ArrowDown from '../../assets/arrow-down.svg';
import ArrowUp from '../../assets/arrow-up.svg';
import DeleteIcon from '../../assets/delete-icon.svg';
import EditIcon from '../../assets/edit-icon.svg';
import Confirm from '../Confirm';
import './styles.css';

function Table({ transactions }) {
    const [asc, setAsc] = useState(true);
    const [openConfirm, setOpenConfirm] = useState(false);

    function handleDeleteItem() {
        console.log('delete');
        setOpenConfirm(false);
    }

    return (
        <div className='container-table'>
            <div className='table-head'>
                <div
                    className='table-column-small content-date'
                    onClick={() => setAsc(!asc)}
                >
                    <strong>Data</strong>
                    <img src={asc ? ArrowUp : ArrowDown} alt="order" />
                </div>
                <strong className='table-column-middle'>Dia da semana</strong>
                <strong className='table-column-big'>Descrição</strong>
                <strong className='table-column-small'>Categoria</strong>
                <strong className='table-column-small'>Valor</strong>
                <div className='table-column-small'></div>
            </div>

            <div className='table-body'>
                {transactions.map((transact) => (
                    <div className='table-row' key={transact.id}>
                        <strong className='table-column-small content-date'>{transact.data}</strong>
                        <span className='table-column-middle'>{transact.data}</span>
                        <span className='table-column-big'>{transact.descricao}</span>
                        <span className='table-column-small'>{transact.categoria_nome}</span>
                        <strong className='table-column-small'>{transact.valor}</strong>
                        <div className='table-column-small action-buttons'>
                            <img src={EditIcon} alt="edit" />
                            <img
                                src={DeleteIcon}
                                alt="delete"
                                onClick={() => setOpenConfirm(true)}
                            />
                        </div>
                        <Confirm
                            open={openConfirm}
                            handleClose={() => setOpenConfirm(false)}
                            handleConfirm={handleDeleteItem}
                        />
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Table;