import {Component} from "react";
import './App.css';

export class Form extends Component {
    state = {
        name: '',
        salary: ''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {name, salary} = this.state;

        if (name !== '' && salary !== '') {
            this.props.onCreate(name, salary);

            this.setState({
                name: '',
                salary: ''
            })
        }
    }

    render() {
        const data = [
            {key: 0, type: 'text', placeholder: 'Имя', name: 'name'},
            {key: 1, type: 'number', placeholder: 'Зарплата', name: 'salary'}
        ]

        const inputs = data.map(item => {
            const {key, type, placeholder, name} = item;

            return (
                <input
                    type={type}
                    key={key}
                    name={name}
                    className="form-control new-post-label"
                    placeholder={placeholder}
                    value={this.state[name]}
                    onChange={this.onChange}/>
            );
        });

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={e => this.onSubmit(e)}>
                    {inputs}
                    <button type="submit" className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}