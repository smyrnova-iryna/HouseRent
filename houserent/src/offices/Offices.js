import ThirdFloor from "./ThirdFloor";
import FourthFloor from "./FourthFloor";

const Offices = ({data}) => {
    return (
        <div id="offices" className="Offices-container">
        <ThirdFloor data={data}/>
        <FourthFloor data={data}/>
        </div>
    )
}

export default Offices;