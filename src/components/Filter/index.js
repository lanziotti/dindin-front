import { useState } from 'react';
import FilterIcon from '../../assets/filter-icon.svg';
import './styles.css';


function Filter() {
    const [open, setOpen] = useState(false);

    return (
        <div className='container-filter'>
            <button
                className='btn-filter'
                onClick={() => setOpen(!open)}
            >
                <img src={FilterIcon} alt="filter" />
                Filtrar
            </button>


            {open &&
                <div className='filter-body'>
                    <strong>Categoria</strong>
                    <div>

                    </div>
                </div>

            }

        </div>
    );
}

export default Filter;