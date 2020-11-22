import { Router } from 'express';
import UserRouter from './Users';
import BinanceRoutes from './BinanceRoutes';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/binance', BinanceRoutes);

// Export the base-router
export default router;
