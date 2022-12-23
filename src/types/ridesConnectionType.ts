/**
 * RIDES_CONNECTION_DB
 * ridesConnection/${userId}/${rideId}/${matchId}
 */

/**
 * UserRides Object
 * @param {string} userId required SECURITY_KEY
 *      @param {string} rideId
 *              @param {string} matchId
 *                      @param {string} id required
 *                      @param {string} date required
 *                      @param {IMatchInfo} matchInfo required
 *                      @param {IRideInfo} rideInfo required
 *                      @param {IUserInfo} userInfo required
 */

/**
 * RULES
 
 * Read - 
1. request.auth.uid == request.resource.data.uid 

 * Create - 
1. authenticated (2 creates how to check?)

 * Update - 
1. false

 * Delete - 
1. false for everyone
 */
