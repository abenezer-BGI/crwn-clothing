import React from "react";
import './collection-overview.styles.scss';
import CollectionPreview from "../preview-collection/collection-preview.component";
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";

const CollectionOverview = ({collections}) => (
    <div className='collection-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => <CollectionPreview
                key={id} {...otherCollectionProps}/>)
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionOverview);