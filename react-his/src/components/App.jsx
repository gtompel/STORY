import {Component} from "react";
import {Filter, Form, Info, List, Search} from ".";
import './App.css';

export class App extends Component {
    state = {
        data: [
            {name: 'Иванов Иван', salary: 1900, star: false, key: 0},
            {name: 'Фёдоров Фёдор', salary: 800, star: true, key: 1},
            {name: 'Семёнов Семён', salary: 1200, star: false, key: 2},
            {name: 'Матвеев Матвей', salary: 900, star: false, key: 3},
            {name: 'Артёмов Артём', salary: 500, star: true, key: 4}
        ],
        text: '',
        active: 'all'
    }

    addElement = (name, salary) => {
        let key = this.state.data.length;

        const element = {
            name: name,
            salary: +salary,
            star: false,
            key: key++
        }

        this.setState(({data}) => ({
            data: [...data, element]
        }))
    }

    starElement = (key) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                return (item.key === key) ? {...item, star: !item['star']} : item;
            })
        }))
    }

    deleteElement = (key) => {
        this.setState(({data}) => ({
            data: data.filter(item => item.key !== key)
        }))
    }

    toggleState = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    search = (data, text) => {
        if (text !== '') {
            return data.filter(item => {
                let name = item.name.toLowerCase().trim();
                return name.indexOf(text.toLowerCase().trim()) > -1;
            });
        } else {
            return data;
        }
    }

    filter = (data, name) => {
        switch (name) {
            case 'star':
                return data.filter(item => item.star);
            case 'rich':
                return data.filter(item => item.salary > 1000);
            default:
                return data;
        }
    }

    render() {
        const {data, text, active} = this.state;
        const result = this.search(this.filter(data, active), text);

        return (
            <div className="app">
                <Info data={data}/>

                <div className="search-panel">
                    <Search toggleState={this.toggleState}/>
                    <Filter
                        toggleState={this.toggleState}
                        active={active}/>
                </div>

                <List
                    onDelete={this.deleteElement}
                    onStar={this.starElement}
                    data={result} />

                <Form onCreate={this.addElement} />
            </div>
        );
    }
}