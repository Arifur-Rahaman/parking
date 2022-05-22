import React from 'react';
import Footer from '../../components/Footer/Footer';
import HelpAccordion from '../../components/HelpAccordion/HelpAccordion';
import SubHeader from '../../components/SubHeader/SubHeader';

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