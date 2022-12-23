/**
 * USERS_DB
 * users/${uid}
 */

export interface IUser {
  uid: string;
  displayName: string;
  email: string;
  firstName: string;
  lastName: string;
  photoURL: string;
  createdAt: Date;
  gender?: string;
  mobile?: number;
  linkedIn?: string;
  occupation?: string;
  company?: string;
  about?: string;
}

/**
 * RULES
 
 * Read - 
1. PUBLIC - true for all authenticated users for public info 

 * Create - 
1. request.auth.uid == request.resource.data.authorUID 
2. Should have all required params

 * Update - 
1. auth.userId == resource.uid 
2. Should have all required params

 * Delete - 
1. false for everyone
 */
