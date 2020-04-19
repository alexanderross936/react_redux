import  { connect } from "react-redux";
import Dashboard from '../Dashboard';

const mapStateToProps = (state) => {
    return {
        cars: state.cars,
        users: state.users
    }
}

export default connect(mapStateToProps)(Home)