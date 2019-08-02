const fs = require('fs')
const parser = require('../parser')

describe('Parser of Items from MELI API', () => {
  // Mock response from MELI API of Items
  const data = JSON.parse(
    fs.readFileSync('./api/__mockData__/items.json', 'utf8')
  )

  test('Can map data from MELI API with Internal API', () => {
    const { results, filters } = data
    const parsedResult = parser.parseItemsResponse({ results, filters })

    expect(parsedResult.author).toEqual({ name: 'Jeremy', lastName: 'Bravo' })
    expect(parsedResult.categories).toEqual([
      'Celulares y Teléfonos',
      'Celulares y Smartphones',
      'iPhone'
    ])
    expect(parsedResult.items).toBeDefined()
  })

  test('If there are no categories, there will be an empty array of categories as result', () => {
    const { results } = data
    const filters = [] // No categories
    const parsedResult = parser.parseItemsResponse({ results, filters })

    expect(parsedResult.author).toBeDefined()
    expect(parsedResult.items).toBeDefined()
    expect(parsedResult.categories).toBeDefined()
    expect(parsedResult.categories).toEqual([])
  })
})

describe('Parser of Item Details from MELI API', () => {
  // Mock response from MELI API of Items
  const itemDetail = JSON.parse(
    fs.readFileSync('./api/__mockData__/itemDetail.json', 'utf8')
  )
  const itemDescription = JSON.parse(
    fs.readFileSync('./api/__mockData__/itemDescription.json', 'utf8')
  )
  const itemCategory = JSON.parse(
    fs.readFileSync('./api/__mockData__/itemCategory.json', 'utf8')
  )

  test('Can map MELI Item Detail/Description API with the internal API', () => {
    const parsedResult = parser.parseItemDetailResponse({
      itemDetail,
      itemDescription,
      itemCategory
    })

    expect(parsedResult.author).toEqual({ name: 'Jeremy', lastName: 'Bravo' })
    expect(parsedResult.item.id).toBe('MLA701558492')
    expect(parsedResult.item.title).toBe(
      'Celular Apple Iphone 6 16gb + Protector + Garantia + Local'
    )
  })
})
