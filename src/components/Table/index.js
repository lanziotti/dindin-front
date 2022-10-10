import { useState } from 'react';
import ArrowDown from '../../assets/arrow-down.svg';
import ArrowUp from '../../assets/arrow-up.svg';
import DeleteIcon from '../../assets/delete-icon.svg';
import EditIcon from '../../assets/edit-icon.svg';
import Confirm from '../Confirm';
import './styles.css';

function Table() {
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
                <div className='table-row'>
                    <strong className='table-column-small content-date'>11/04/2022</strong>
                    <span className='table-column-middle'>Segunda</span>
                    <span className='table-column-big'>Venda de um produto</span>
                    <span className='table-column-small'>Vendas</span>
                    <strong className='table-column-small'>R$ 100,00</strong>
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
            </div>
        </div>
    );
}

export default Table;