import { Subjects, Publisher, PaymentCreatedEvent } from '@shelllong-org/common'

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated
}
