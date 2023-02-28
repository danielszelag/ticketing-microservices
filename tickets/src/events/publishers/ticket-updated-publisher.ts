import { Publisher, Subjects, TicketUpdatedEvent } from '@shelllong-org/common'

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated
}
