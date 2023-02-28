import { Publisher, OrderCreatedEvent, Subjects } from '@shelllong-org/common'

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated
}
