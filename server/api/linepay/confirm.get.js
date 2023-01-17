import createNonce from '~~/server/utils/createNonce'
import createHeader from '~~/server/utils/createHeader'

const orders = {}
const {
  LINEPAY_SITE,
  LINEPAY_VERSION
} = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const { orderId, transactionId } = getQuery(event)
  const order = orders[orderId]
  const linePayBody = {
    amount: 3000,
    currency: 'TWD'
  }
  const uri = `/payments/${transactionId}/confirm`
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
    return sendRedirect(event, '/confirm')
  } else {
    return sendRedirect(event, '/cancel')
  }
})