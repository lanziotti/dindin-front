import './styles.css';

function Chip({ title, checked }) {
    return (
        <div className={`container-chip ${checked ? 'checked' : 'unchecked'}`}>
            <span>{title}</span>
            {checked ? 'x' : '+'}
        </div>
    );
}

export default Chip;