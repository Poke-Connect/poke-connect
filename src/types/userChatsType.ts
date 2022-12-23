/**
 * USER_CHATS_DB
 * userChats/${userId}/${chatId}
 */

/**
 * UserChats Object
 * @param {string} userId required SECURITY_KEY
 *      @param {string} chatId
 *           @param {string} date required
 *           @param {IMatchInfo} matchInfo required
 *           @param {IRideInfo} rideInfo required
 *           @param {IUserInfo} userInfo required
 */

/**
 * RULES
 
 * Read - 
1. request.auth.uid == request.resource.data.uid 

 * Create - 
1. authenticated (2 creates how to check?)

 * Update - 
1. authenticated (2 creates how to check?)

 * Delete -
1. false for everyone

 */
