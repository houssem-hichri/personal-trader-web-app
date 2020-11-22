import axios from 'axios'
import crypto from 'crypto'

import { thirdParty } from '../../config/apis'

export const getAllPrices = async () => {

    const query = `&timestamp=${Math.floor(Date.now())}&recvWindow=5000`
    const signature = crypto.createHmac( 'sha256', 'jnIHw01Tr3Zp0C1BLKsAm6QBlzAVdOCjpBHu5BTYBqY4RAvwmVnz0FGJUGLJ6lmz' ).update( query ).digest( 'hex' )

    const endPoint = `${thirdParty.binance_api}/sapi/v1/capital/config/getall?${query}&signature=${signature}`
    const result = await axios.get(endPoint, {
        headers: { 'X-MBX-APIKEY': 'WyeUxDanH5Km9JVqkJivXOjXQ1L9Z7H7rNeKz6G9kkNvL9zht68EoPXEk70zeuwr' }
    })

    return result.data
    }