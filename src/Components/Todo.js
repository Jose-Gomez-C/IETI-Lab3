import React from 'react';
import OutlinedCard from './OutlinedCard';

export class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <OutlinedCard
                tareaN = {this.props.text} 
                status = {this.props.status} 
                date = {this.props.dueDate.toString()} 
                responsible = {this.props.responsible}>
            </OutlinedCard>
            <br/>
            </div>
        );
    }
}