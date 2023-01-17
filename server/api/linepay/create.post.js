import createNonce from '~~/server/utils/createNonce'
import createHeader from '~~/server/utils/createHeader'

const {
  LINEPAY_RETURN_CANCEL_URL,
  LINEPAY_RETURN_CONFIRM_URL,
  LINEPAY_RETURN_HOST,
  LINEPAY_SITE,
  LINEPAY_VERSION
} = useRuntimeConfig()

const orders = {}

export default defineEventHandler(async (event) => {
  const order = {
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
  }
  order['orderId'] = createNonce()
  orders[order.orderId] = order
  const linePayBody = {
    ...order,
    redirectUrls: {
      confirmUrl: LINEPAY_RETURN_HOST + LINEPAY_RETURN_CONFIRM_URL,
      cancelUrl: LINEPAY_RETURN_HOST + LINEPAY_RETURN_CANCEL_URL 
    }
  }
  const uri = '/payments/request'
  const nonce = createNonce()
  const headers = createHeader(uri, linePayBody, nonce)

  const apiUrl = LINEPAY_SITE + '/' + LINEPAY_VERSION + uri

  const linePayResponse = await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(linePayBody),
    headers
  })
  const response = await linePayResponse.json()

  if (response.returnCode === '0000') {
    return sendRedirect(event, response.info.paymentUrl.web)
  } else {
    return sendRedirect(event, '/cancel')
  }
})