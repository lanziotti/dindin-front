import { useState } from 'react';
import FilterIcon from '../../assets/filter-icon.svg';
import Chip from '../Chip';
import './styles.css';


function Filter() {
    const [open, setOpen] = useState(false);

    return (
        <div className='container-filter'>
            <button
                className='btn-white btn-filter'
                onClick={() => setOpen(!open)}
            >
                <img src={FilterIcon} alt="filter" />
                Filtrar
            </button>


            {open &&
                <div className='filter-body'>
                    <strong>Categoria</strong>
                    <div className='container-categories'>
                        <Chip checked title="Compras" />
                        <Chip checked={false} title="Vendas" />
                    </div>
                    <div className='container-btns-filter'>
                        <button className='btn-white btn-extra-small'>Limpar Filtros</button>
                        <button className='btn-purple btn-extra-small'>Aplicar Filtros</button>
                    </div>
                </div>

            }

        </div>
    );
}

export default Filter;