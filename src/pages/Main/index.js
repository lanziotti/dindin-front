import { useEffect, useState } from 'react';
import AddTransactionModal from '../../components/AddTransactionModal';
import Header from '../../components/Header';
import ProfileModal from '../../components/ProfileModal';
import Resume from '../../components/Resume';
import Table from '../../components/Table';
import Filter from '../../components/Filter';
import './styles.css';
import { loadTransactions } from '../../utils/requisitions';

function Main() {
    const [openModalProfile, setOpenModalProfile] = useState(false);
    const [openAddModalTransaction, setOpenAddModalTransaction] = useState(false);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        async function getAllTransactions() {
            const allTransactions = await loadTransactions();

            setTransactions([...allTransactions]);
        }
        
        getAllTransactions();

    }, []);

    return (
        <div className='container-main'>
            <Header
                handleEditProfile={() => setOpenModalProfile(true)}
            />
            <section>
                <div className='width-limit'>
                    <div className='container-data'>
                        <div className='container-left'>
                            <Filter />
                            <Table
                                transactions={transactions}
                            />
                        </div>
                        <div className='container-right'>
                            <Resume />
                            <button
                                className='btn-purple btn-small'
                                onClick={() => setOpenAddModalTransaction(true)}
                            >
                                Adicionar Registro
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <AddTransactionModal
                open={openAddModalTransaction}
                handleClose={() => setOpenAddModalTransaction(false)}
                setTransactions={setTransactions}
            />
            <ProfileModal
                open={openModalProfile}
                handleClose={() => setOpenModalProfile(false)}
            />
        </div>
    );
}

export default Main;