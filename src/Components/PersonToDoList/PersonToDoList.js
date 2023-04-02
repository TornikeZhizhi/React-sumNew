import React from 'react';
import PrsHeader from './PrsHeader';
import "./Prs.css";
import PersonList from './PersonList';
import PersonFilters from './PersonFilters';

const PersonToDoList = () => {
    return (
        <div className='prs_fluid'>
            <PrsHeader/>
            <PersonFilters/>
            <PersonList/>
        </div>
    );
};

export default PersonToDoList;