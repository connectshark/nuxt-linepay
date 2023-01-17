const {
  LINEPAY_CHANNEL_ID,
  LINEPAY_CHANNEL_SECRET,
  LINEPAY_VERSION
} = useRuntimeConfig()
import { createHmac } from 'crypto'

export default function (uri, linePayBody, nonce) {
  const string = `${LINEPAY_CHANNEL_SECRET}/${LINEPAY_VERSION}${uri}${JSON.stringify(linePayBody)}${nonce}`
  const signature = createHmac('sha256', LINEPAY_CHANNEL_SECRET).update(string).digest('base64')
  return {
    'Content-Type': 'application/json',
    'X-LINE-ChannelId': LINEPAY_CHANNEL_ID,
    'X-LINE-Authorization-Nonce': nonce,
    'X-LINE-Authorization': signature
  }
}