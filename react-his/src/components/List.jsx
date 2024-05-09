import {Element} from "../components/";
import './App.css';

export const List = ({data, onDelete, onStar}) => {
    const elements = data.map(item => {
            return (
                <Element
                    onDelete={() => onDelete(item.key)}
                    onStar={() => onStar(item.key)}
                    {...item} />
            );
    });

    const Error = () => <div className="error">Сотрудники не найдены</div>

    return (
        <ul className="app-list list-group">
            {data.length !== 0 ? elements : <Error/>}
        </ul>
    );
}