import { connect } from 'react-redux'
import { navigate, goBack, reset, toggleDrawer, openDrawer, closeDrawer, navigateInTabs } from '../actions'

export default WrappedComponent => {
    const mapDispatchToProps = {
        navigate,
        reset,
        goBack,
        toggleDrawer,
        openDrawer,
        closeDrawer,
        navigateInTabs
    }

    return connect( 
        null,
        mapDispatchToProps
    )(WrappedComponent)
}