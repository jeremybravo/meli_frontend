const express = require('express')
const axios = require('axios')
const { parseItemsResponse, parseItemDetailResponse } = require('./parser')

const router = express.Router()

// Axios instance for MercadoLibre API Requests
const meliRequest = axios.create({
  baseURL: 'https://api.mercadolibre.com'
})

// Ping route for availability check.
router.get('/ping', (req, res) => res.json({ msg: 'pong' }))

router.get('/items', async ({ query: { q } }, res, next) => {
  try {
    const { data: { results, filters } } = await meliRequest.get(
      `sites/MLA/search?q=${q}&limit=4`
    )

    res.send(parseItemsResponse({ results, filters }))
  } catch (err) {
    next(err.data)
  }
})

router.get('/items/:id', async ({ params: { id } }, res, next) => {
  try {
    const [{ data: itemDetail }, { data: itemDescription }] = await Promise.all(
      [
        meliRequest.get(`items/${id}`),
        meliRequest.get(`items/${id}/description`)
      ]
    )

    const { data: itemCategory } = await meliRequest.get(
      `/categories/${itemDetail.category_id}`
    )

    res.send(
      parseItemDetailResponse({ itemDetail, itemDescription, itemCategory })
    )
  } catch (err) {
    next(err.data)
  }
})

module.exports = router
