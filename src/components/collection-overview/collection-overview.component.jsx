import React from 'react';
import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-overview.syles.scss';



import {selectCollectionsOverview} from '../../redux/shop/shop.selector';


const CollectionOverview = ({collections}) =>(

    <div className = "collection-overview">{
        collections.map(({id, ...otherCollectionProps}) =>
        (
        <CollectionPreview key ={id} {...otherCollectionProps}/>
        ))
    }
</div>
);



const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsOverview
    });

export default connect(mapStateToProps)(CollectionOverview);