import React, { Component } from 'react';
import PropTypes from 'prop-types';

// export class Todoitem extends Component {
//     render() {
//         return (
//             <div style={itemStyles}>
//                 <p>{ this.props.todo.title }</p>
//             </div>
//         )
//     }
// }



export class Todoitem extends Component {

    /*getStyle = () => {
        if(this.props.todo.completed){
            return{
                textDecoration: 'line-through',
                color: 'red',
                backgroundColor: '#f4f4f4',
                fontSize: '20px'
            }
        }
        else{
            return{
                textDecoration: 'none',
                color: 'blue',
                backgroundColor: '#f4f4f4',
                fontSize: '20px'
            }
        }
    }*/


    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            color: this.props.todo.completed ? 'red' : 'blue'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <input type="checkbox" name="" id="" />
                <p>{ this.props.todo.title }</p>
            </div>
        )
    }
}

//PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

// const itemStyles = {
//     color: 'red',
//     backgroundColor: '#f4f4f4'
// }

export default Todoitem
