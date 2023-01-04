import React from 'react';
import { render } from 'react-dom';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {
state = {
    firstName: '',
    lastName: '',
    age: '',
    people: []
}

onFirstNameChange = e => {
    this.setState({ firstName: e.target.value });
}

onLastNameChange = e => {
    this.setState({ lastName: e.target.value });
}

onAgeChange = e => {
    this.setState({ age: e.target.value });
}

onAddClick = () => {
    const { firstName, lastName, age, people } = this.state;
    const copy = [ {firstName, lastName, age}, ...people];

    this.setState({ people: copy, firstName: '', lastName: '', age: ''});
}

onClearClick = () => {
    this.setState({ people: [], firstName: '', lastName: '', age: ''});
}

render() {
    return ( 
        <div className='container mt-5'>
            <PersonForm
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                age={this.state.age}
                onFirstNameChange={this.onFirstNameChange}
                onLastNameChange={this.onLastNameChange}
                onAgeChange={this.onAgeChange}
                onAddClick={this.onAddClick}
                onClearClick={this.onClearClick} />
            <PersonRow people={this.state.people}/>
        </div>
    )
}

}

export default PeopleTable;
