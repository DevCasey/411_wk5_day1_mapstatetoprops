import Dashboard from '../components/Dashboard'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        cars: state.cars,
        user: state.user
    }
}

export default connect(mapStateToProps)(Dashboard)