import React from 'react';

import '../../components/collection-preview/collection-preview.component';
import CollectionPage from '../../components/collections/collections.component';
import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';

const ShopPage = ({match})=>
(

<div className="shop">

<Route exact path={`${match.path}`} component={CollectionOverview}/>
<Route path={`${match.path}/:collectionId`} component = {CollectionPage}/>
</div>


);

export default ShopPage;