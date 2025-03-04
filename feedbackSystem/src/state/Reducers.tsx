const feedbacks:string[] = [];
export const feedbackReducer = (state = feedbacks, action:any) => {
  switch (action.type) {
    case 'SUBMIT_FEEDBACK':
      return [...state, action.payload];
    default:
      return state;
  }
};