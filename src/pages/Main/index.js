import Header from '../../components/Header';
import Resume from '../../components/Resume';
import Table from '../../components/Table';
import './styles.css';

function Main() {
    return (
        <div className='container-main'>
            <Header />
            <section>
                <div className='width-limit'>
                    <button>Filtros</button>
                    <div className='container-data'>
                        <Table />
                        <div className='container-right'>
                            <Resume />
                            <button className='btn-purple btn-small'>Adicionar Registro</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;