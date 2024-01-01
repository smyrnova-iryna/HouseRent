import ThirdFloor from "./ThirdFloor";
import FourthFloor from "./FourthFloor";

const Offices = ({data, navigateToTheTop}) => {
    return (
        <div id="offices" className="Offices-container">
        <ThirdFloor data={data} navigateToTheTop={navigateToTheTop}/>
        <FourthFloor data={data} navigateToTheTop={navigateToTheTop}/>
        </div>
    )
}

export default Offices;