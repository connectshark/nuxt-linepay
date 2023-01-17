export default defineEventHandler(async (event) => {
  const { orderId } = await readBody(event)
  const list = [
    {
      id: '183249',
      amount: 3000,
      currency: 'TWD',
      packages: [
        {
          id: 'coat_1',
          amount: 3000,
          products: [
            {
              name: '羽絨外套',
              quantity: 2,
              price: 1500
            }
          ]
        }
      ]
    },
    {
      id: '39492',
      amount: 500,
      currency: 'TWD',
      packages: [
        {
          id: 'pen',
          amount: 500,
          products: [
            {
              name: '筆',
              quantity: 6,
              price: 50
            },
            {
              name: '剪刀',
              quantity: 2,
              price: 100
            }
          ]
        }
      ]
    }
  ]
  return list.find(item => item.id === orderId)
})