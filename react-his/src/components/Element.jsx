import './App.css';

export const Element = ({name, salary, position, star, onDelete, onStar}) => {
    const data = [
        {key: 0, name: 'pen', text: 'История'},
        {key: 1, name: 'star', text: 'Избранный', handler: onStar},
        {key: 2, name: 'trash', text: 'Удалить', handler: onDelete}
    ]

    const buttons = data.map(item => {
        const {key, name, text, handler} = item;

        return (
            <button
                type="button"
                key={key}
                className={`btn-${name} btn-sm`}
                onClick={handler}
                title={text}>
                <i className={`fas fa-${name}`}/>
            </button>
        );
    })

    return (
        <li className={`list-group-item d-flex justify-content-between ${star ? 'star' : ''}`}>
            <span className="list-group-item-label">{name}</span>
            <div className="list-group-item-input value">{salary}$</div>
            <div className="list-group-item-label">{position}</div>
            <div className='d-flex justify-content-center align-items-center'>
                {buttons}
            </div>
        </li>
    );
}