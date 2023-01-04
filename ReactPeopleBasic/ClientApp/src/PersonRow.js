import React from 'react';

class PersonRow extends React.Component{

    generateTr = (p, key) =>{
        let classNames = '';
        if (p.age >= 65) {
            classNames += 'bg-danger'
        }

        return <tr key={key} className={classNames}>
            <th>{p.firstName}</th>
            <th>{p.lastName}</th>
            <th>{p.age}</th>
        </tr>;
    }

    render() {
        const { people } = this.props;
        return <table className='table table-hover'>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {
                    people.map((p, i) => this.generateTr(p, i))
                }
            </tbody>
        </table>
    }
}

export default PersonRow;