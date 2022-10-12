import { useEffect, useState } from 'react';
import api from '../../services/api';
import { formatToMoney } from '../../utils/formatters';
import { getItem } from '../../utils/storage';
import './styles.css';

function Resume() {
    const [extract, setExtract] = useState({
        in: 0,
        out: 0,
        balance: 0
    });

    const token = getItem('token');

    async function loadExtract() {
        try {
            const response = await api.get('/transacao/extrato', {
                headers: {
                    Authorizathion: `Bearer ${token}`
                }
            });

            const { entrada, saida } = response.data;

            setExtract({
                in: formatToMoney(entrada),
                out: formatToMoney(saida),
                balance: formatToMoney(entrada - saida)
            });

        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        loadExtract();
    }, []);

    return (
        <div className='container-resume'>
            <h1>Resumo</h1>
            <div className='line-resume'>
                <span>Entradas</span>
                <span className='in'>{extract.in}</span>
            </div>
            <div className='line-resume'>
                <span>Saídas</span>
                <span className='out'>{extract.out}</span>
            </div>
            <div className='horizontal-line'>

            </div>
            <div className='line-resume'>
                <h3>Saldo</h3>
                <span className='resume'>{extract.balance}</span>
            </div>
        </div>
    );
}

export default Resume;