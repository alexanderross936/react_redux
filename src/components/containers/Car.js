import  { connect } from "react-redux";
import Car from '../Car';

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}



export default connect(mapStateToProps)(Home)
