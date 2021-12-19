import React from 'react';
import '../../redux/shop/shop.data';
import {Outlet} from "react-router-dom";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.util";
import {connect} from "react-redux";
import {updateCollection} from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const OutletWithSpinner = WithSpinner(Outlet)

class ShopPage extends React.Component{

    state = {
        isLoading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections')
        collectionRef.onSnapshot(((snapshot) => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({
                isLoading: false
            })
        }))
    }



    render() {
        return (
            <div className='shop-page'>
                <OutletWithSpinner isLoading={this.state.isLoading}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>({
    updateCollections:(collectionsMap) => dispatch(updateCollection(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);