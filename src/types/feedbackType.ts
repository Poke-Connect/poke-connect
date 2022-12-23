/**
 * FEEDBACK_DB
 * feedback/${id}
 */
//FireStore

export interface Feedbacks {
  feedbacks: IFeedback[];
}

export interface IFeedback {
  createdAt: Date;
  email: string;
  name: string;
  suggestion: string;
}

/**
 * RULES
 
 * Read - false for everyone

 * Create - 
1. true for everyone 
2. Should have all required params

 * Update - false for everyone

 * Delete - false for everyone

 */
