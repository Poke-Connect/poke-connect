/**
 * CHATS_DB
 * chats/${chatid}
 */

export interface Chats {
  chats: IChat[];
}

export interface IChat {
  messages: IMessage[];
  users: string[];
}

export interface IMessage {
  id: string;
  date: Date;
  senderId: string;
  text: string;
}

/**
 * RULES
 
 * Read - 

 * Create - 

 * Update - 

 * Delete - false for everyone

 */
