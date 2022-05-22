import { Box } from '@mui/material';
import Discount from '../../components/Discount/Discount'
import Tariffs from '../../components/Tariffs/Tariffs';
import Footer from '../../components/Footer/Footer';
import ParkingAmenities from '../../components/ParkingAmenities/ParkingAmenities';
import HowWork from '../../components/HowWork/HowWork';
import ParkingOptions from '../../components/ParkingOptions/ParkingOptions';
import NavBar from '../../components/NavBar/NavBar';
import SubHeader from '../../components/SubHeader/SubHeader';

const Options = () => {
    const idToken = localStorage.getItem('idToken');
    return (
        <Box sx={{width: '100%'}}>
            {idToken&& <NavBar></NavBar>}
            <SubHeader title={'Parking Options'}></SubHeader>
            <ParkingOptions showTittle={false}></ParkingOptions>
            <ParkingAmenities></ParkingAmenities>
            <Discount></Discount>
            <Tariffs></Tariffs>
            <HowWork></HowWork>
            <Footer></Footer>
        </Box>
    );
};

export default Options;