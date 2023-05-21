import React from "react";

export class MyTodos extends React.Component{
    render() {
        return (
            <div>
                <ul>
                    {this.props.todos.map(todo => (
                        <li key={todo.id}>{todo.title}
                            {todo.completed && <span>
                                <svg width="20px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.29417 12.9577L10.5048 16.1681L17.6729 9" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="12" cy="12" r="10" stroke="#000000" stroke-width="2"/>
                                </svg></span>}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
