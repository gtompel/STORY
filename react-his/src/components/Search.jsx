import {Component} from "react";
import './App.css';

export class Search extends Component {
    state = {
        text: ''
    }

    onChange = (e) => {
        const text = e.target.value;

        this.setState({
            text: text
        })

        this.props.toggleState('text', text);
    }

    render() {
        const {text} = this.state;

        return (
            <input
                className="form-control search-input"
                placeholder="Найти сотрудника"
                onChange={e => this.onChange(e)}
                value={text}
                type="text" />
        );
    }
}