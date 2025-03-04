export const submitFeedback = (feedback: string) => {
  return {
    type: 'SUBMIT_FEEDBACK',
    feedback
  }
}
