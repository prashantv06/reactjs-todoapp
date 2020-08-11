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

    getStyle = () => {
        if(this.props.todo.completed){
            return{
                textDecoration: 'line-through'
            }
        }
        else{
            return{
                textDecoration: 'none'
            }
        }
    }

    render() {
        return (
            <div style={this.getStyle()}>
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
