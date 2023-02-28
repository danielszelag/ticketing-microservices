import { Subjects, Publisher, OrderCancelledEvent } from '@shelllong-org/common'

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled
}
