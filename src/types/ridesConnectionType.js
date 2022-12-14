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
 *                      @param {string} matchInfo required
 *                      @param {string} rideInfo required
 *                      @param {string} userInfo required
 */

/**
 * matchInfo
 * @param {Object} matchinfo
 *      @param {string} extraDist
 *      @param {string} extraTime
 */

/**
 * rideInfo
 * @param {Object} matchinfo
 *      @param {string} location
 *      @param {string} rideId
 *      @param {string} timeStampRide
 */

/**
 * userInfo
 * @param {Object} matchinfo
 *      @param {string} displayName
 *      @param {string} email
 *      @param {string} photoURL
 *      @param {string} uid
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
