import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';


import PeopleTable from './PeopleTable';
import PersonRow from './PersonRow';
import PersonForm from './PersonForm';


ReactDom.render(<PeopleTable />, document.getElementById('root'));