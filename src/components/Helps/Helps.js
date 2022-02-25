import React from 'react';
import Footer from '../Footer/Footer';
import HelpAccordion from '../HelpAccordion/HelpAccordion';
import SubHeader from '../SubHeader/SubHeader';

const Help = () => {
    return (
        <div style={{width: '100%'}}>
            <SubHeader title={"Help"}></SubHeader>
            <HelpAccordion></HelpAccordion>
            <Footer></Footer>
        </div>
    );
};

export default Help;