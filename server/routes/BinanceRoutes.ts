import { getAllPrices } from './api'
import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';

import UserDao from '@daos/User/UserDao.mock';

// Init shared
const router = Router();
const userDao = new UserDao();


/******************************************************************************
 *                      Get Binance Data - "GET /api/v1/binance/get-data"
 ******************************************************************************/

router.post('/get-data', async (req: Request, res: Response) => {
    const userData = await getAllPrices();
    return res.status(OK).json({ userData });
});


/******************************************************************************
 *                       POST
 ******************************************************************************/

// Todo

export default router;
