import  { connect } from "react-redux";
import Home from '../Home';

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Home)