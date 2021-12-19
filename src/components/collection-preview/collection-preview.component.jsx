import React from 'react';
import './collection-preview.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";
import {useLocation, useNavigate} from "react-router-dom";
import {TitleContainer} from "./collection-preview.styles";

const CollectionPreview = ({title, items, match, routeName}) => {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <div className='collection-preview'>
            <TitleContainer onClick={() => navigate(`${location.pathname}/${routeName}`)}
                            className='title'>{title.toUpperCase()}</TitleContainer>
            <div className='preview'>
                {
                    items.filter((item, index) => index < 4).map((item) => (
                        <CollectionItem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    )
}

export default CollectionPreview;