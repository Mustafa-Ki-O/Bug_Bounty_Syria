import nodata from '../../assets/nodata.json'
import Lottie from 'react-lottie'

const NoData = () => {
    const defaultOptions = {
        loop: true, 
        autoplay: true, 
        animationData: nodata,
        
    };
    return(
        <Lottie options={defaultOptions}  width='50%'/>
    )
    
}
export default NoData