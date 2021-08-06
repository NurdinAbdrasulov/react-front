import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from '../resources/slugs';
import LoadingComponent from '../components/loading';
import ProductsComponent from './products/ProductsComponent';
import UsersComponent from './users/UsersComponent';
import CreateProductsComponent from './products/CreateProductsComponent';
import ActivitiesComponent from './activity/ActivitiesComponent';
import CreateActivitiesComponent from './activity/CreateActivitiesComponent';
import EditActivitiesComponent from './activity/EditActivitiesComponent';
import EditProductsComponent from './products/EditProductsComponent';
import CategoryProductsComponent from './categoryProducts/CategoryProductsComponent';
import EditCategoryProductsComponent from './categoryProducts/EditCategoryProductsComponent';
import CreateCategoryProductsComponent from './categoryProducts/CreateCategoryProductsComponent';
import UserAgreementComponent from './userAgreemnent/UserAgreementComponent';

const StatisticsComponent = lazy(() => import('./statistics/StatisticsComponent'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading={false} />}>
            <Switch>
                <Route exact path={SLUGS.statistics} component={StatisticsComponent} />
                <Route exact path={SLUGS.users} component={UsersComponent} />
                <Route exact path={SLUGS.products} component={ProductsComponent} />
                <Route exact path={SLUGS.editProduct} component={EditProductsComponent} />
                <Route exact path={SLUGS.createProduct} component={CreateProductsComponent} />
                <Route exact path={SLUGS.categoryProducts} component={CategoryProductsComponent} />
                <Route exact path={SLUGS.editСategoryProducts} component={EditCategoryProductsComponent} />
                <Route exact path={SLUGS.createСategoryProducts} component={CreateCategoryProductsComponent} />
                <Route exact path={SLUGS.activity} component={ActivitiesComponent} />
                <Route exact path={SLUGS.editActivity} component={EditActivitiesComponent} />
                <Route exact path={SLUGS.createActivity} component={CreateActivitiesComponent} />
                <Route exact path={SLUGS.usersAgreement} component={UserAgreementComponent} />
                <Redirect to={SLUGS.statistics} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
