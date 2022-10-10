import DeleteIcon from '../../assets/delete-icon.svg';
import EditIcon from '../../assets/edit-icon.svg';
import ArrowUp from '../../assets/arrow-up.svg';
import ArrowDown from '../../assets/arrow-down.svg';
import './styles.css';
import { useState } from 'react';

function Table() {
    const [asc, setAsc] = useState(true);

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
                    <div className='table-column-small'>
                        <img src={EditIcon} alt="edit" />
                        <img src={DeleteIcon} alt="delete" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Table;