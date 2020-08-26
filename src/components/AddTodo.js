import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onSubmit = (e) => {
        //will try to submit to the actual file, so to stop that we use preventDefault 
        e.preventDefault();
        this.props.addTodo(this.state.title); // to add new todo in input type
        this.setState({ title: '' }) // to clear the fields
    };

    onChange = (e) => this.setState({ title: e.target.value });

    render() {
        return (
            <form onSubmit= {this.onSubmit} style={{ display: 'flex' }}>
                <input 
                    type="text" 
                    name="title"
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Add Todos..."
                    value = {this.state.title}
                    onChange = {this.onChange}
                />

                <input 
                    type="submit" 
                    value="Submit"
                    className="btn"
                    style={{ flex: '1' }}
                />

            </form>
        )
    }
}

export default AddTodo
