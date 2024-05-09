import './App.css';

export const Info = ({data}) => {
    const star = data.filter(item => item.star).length;

    return (
        <div className="info">
            <h3>Общее число откликов: {data.length}</h3>
            <h3>Удовлетворяющие кандидаты: {star}</h3>
        </div>
    );
}