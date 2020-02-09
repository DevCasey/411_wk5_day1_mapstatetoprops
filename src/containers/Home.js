import Home from '../components/Home';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Home)