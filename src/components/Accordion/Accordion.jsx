import React from 'react';
import AccordionItem from "./AccordionItem";

const Accordion = () => {

    const accordionData = [
        {title: 'Accordion 1', details: '1 Lorem ipsum dolor sit amet, consectetur adipisicing.'},
        {title: 'Accordion 2', details: '2 Lorem ipsum dolor sit amet, consectetur adipisicing.'},
        {title: 'Accordion 3', details: '3 Lorem ipsum dolor sit amet, consectetur adipisicing.'},
    ]
    return (
        <div>
            {accordionData.map((el, ind) => <AccordionItem itemData={el} key={ind}/>)}
        </div>
    );
};

export default Accordion;
