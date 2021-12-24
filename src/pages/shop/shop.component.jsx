import React from 'react';
import '../../redux/shop/shop.data';
import {Outlet} from "react-router-dom";
import {connect} from "react-redux";
import {fetchCollectionsStart} from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {createStructuredSelector} from "reselect";
import {selectDidCollectionsLoad} from "../../redux/shop/shop.selectors";

const OutletWithSpinner = WithSpinner(Outlet)

class ShopPage extends React.Component {

    componentDidMount() {
        const {fetchCollectionsStart} = this.props
        fetchCollectionsStart()
    }


    render() {
        const {didCollectionsLoad} = this.props
        return (
            <div className='shop-page'>
                <OutletWithSpinner isLoading={!didCollectionsLoad}/>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    didCollectionsLoad: selectDidCollectionsLoad,
})

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);