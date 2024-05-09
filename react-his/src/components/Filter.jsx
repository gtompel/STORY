import './App.css';

export const Filter = ({active, toggleState}) => {
    const data = [
        {key: 0, name: 'all', text: 'Все сотрудники'},
        {key: 1, name: 'star', text: 'Премированные'},
        {key: 2, name: 'rich', text: 'Больше 1000$'}
    ]

    const onClick = (e) => {
        const name = e.currentTarget.getAttribute('data-name');
        toggleState('active', name);
    }

    const buttons = data.map(item => {
        const {key, name, text} = item;

        const activeFilter = active === name,
            classNames = activeFilter ? 'active' : '';

        return (
            <button
                key={key}
                type="button"
                data-name={name}
                className={`btn btn-outline-light ${classNames}`}
                onClick={e => onClick(e)}>
                {text}
            </button>
        );
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}