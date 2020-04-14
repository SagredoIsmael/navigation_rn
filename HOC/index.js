import { connect } from 'react-redux'
import { navigate, goBack, reset, toggleDrawer, openDrawer, closeDrawer } from '../actions'

export default WrappedComponent => {
    const mapDispatchToProps = {
        navigate,
        reset,
        goBack,
        toggleDrawer,
        openDrawer,
        closeDrawer,
    }

    return connect( 
        mapDispatchToProps
    )(WrappedComponent)
}