import React from 'react';

class PersonForm extends React.Component {
    render() {
        const { firstName, lastName, age, onAddClick, onClearClick, onFirstNameChange, onLastNameChange, onAgeChange} = this.props;
        return (
            <div className='row jumbotron'>
                <div className='col-md-3 md-offset-2'>
                    <input value={firstName} onChange={onFirstNameChange} className='form-control' placeholder='First Name' />
                </div>
                <div className='col-md-3'>
                    <input value={lastName} onChange={onLastNameChange} className='form-control' placeholder='Last Name' />
                </div>                
                <div className='col-md-3'>
                    <input value={age} onChange={onAgeChange} className='form-control' placeholder='Age' />
                </div>
                <div className='col-md-1'>
                    <button onClick={onAddClick} className='btn btn-primary btn-block'>Add</button>
                </div>
                <div className='col-md-1'>
                    <button onClick={onClearClick} className='btn btn-warning btn-block'>Clear All</button>
                </div>
            </div>
        );
    }
}

export default PersonForm;