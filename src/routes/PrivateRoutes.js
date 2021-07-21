import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from '../resources/slugs';
import LoadingComponent from '../components/loading';
import ProductsComponent from './products/ProductsComponent';
import UsersComponent from './users/UsersComponent';
import CreateProductsComponent from './products/CreateProductsComponent';
import ActivitiesComponent from './activity/ActivitiesComponent';

const StatisticsComponent = lazy(() => import('./statistics/StatisticsComponent'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading={false} />}>
            <Switch>
                <Route exact path={SLUGS.statistics} component={StatisticsComponent} />
                <Route exact path={SLUGS.users} component={UsersComponent} />
                <Route exact path={SLUGS.products} component={ProductsComponent} />
                <Route exact path={SLUGS.editProduct} render={() => <div>edit products</div>} />
                <Route exact path={SLUGS.createProduct} component={CreateProductsComponent} />
                <Route exact path={SLUGS.activity} component={ActivitiesComponent} />
                <Redirect to={SLUGS.statistics} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
