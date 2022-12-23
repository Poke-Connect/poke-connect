/**
 * USER_RIDES_DB
 * userRides/${userId}/${rideId}
 */

/**
 * UserRides Object
 * @param {string} userId required SECURITY_KEY
 *      @param {string} rideId
 *              @param {string} timeStampRide required
 */

/**
 * RULES
 
 * Read - 
1. request.auth.uid == request.resource.data.uid 

 * Create - 
1. request.auth.uid == request.resource.data.uid 
2. Should have all required params

 * Update - 
1. auth.userId == resource.uid 
2. Should have all required params

 * Delete - 
1. false for everyone
 */