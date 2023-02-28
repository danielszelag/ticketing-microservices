import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent
} from '@shelllong-org/common'

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete
}
