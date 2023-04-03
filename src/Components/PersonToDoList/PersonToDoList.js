import React from 'react';
import PrsHeader from './PrsHeader';
import "./Prs.css";
import PersonList from './PersonList';
import PersonFilters from './PersonFilters';
// import Sorttodo from './sort';

const PersonToDoList = () => {
    return (
        <div className='prs_fluid'>
            {/* <Sorttodo/> */}
            <PrsHeader/>
            <PersonFilters/>
            <PersonList/>
        </div>
    );
};

export default PersonToDoList;