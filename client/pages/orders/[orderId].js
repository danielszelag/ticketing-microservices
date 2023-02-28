import { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout'
import useRequest from '../../hooks/use-request'

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState(0)

  const { errors, doRequest } = useRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id
    },
    onSuccess: () => Router.push('/orders')
  })

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date()
      setTimeLeft(Math.round(msLeft / 1000))
    }
    findTimeLeft()
    const timerId = setInterval(findTimeLeft, 1000)
    return () => clearInterval(timerId)
  }, [])

  return (
    <div>
      {timeLeft > 0
        ? `${timeLeft} seconds until order expires`
        : 'Order Expired'}
      <StripeCheckout
        token={({ id }) => doRequest({ token: id })}
        amount={order.ticket.price * 100}
        email={currentUser.email}
        stripeKey='pk_test_51Mg6lqDuH9GK5iPJyR2YWCgSgrGP9DI7FGZIDDDeyNmw06DuN8P5QmhX0JP6AK3LzvwTVPGsETgGfahNd1XSZ5G300JV5zyvs0'
      />
      {errors}
    </div>
  )
}
OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query
  const { data } = await client.get(`/api/orders/${orderId}`)
  return { order: data }
}
export default OrderShow
