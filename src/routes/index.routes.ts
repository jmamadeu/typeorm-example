import express from 'express';

import StoreRoutes from './store.routes';
import ProductsRoutes from './product.routes';

const routes = express.Router();

routes.use('/stores', StoreRoutes);
routes.use('/products', ProductsRoutes);

export default routes;
