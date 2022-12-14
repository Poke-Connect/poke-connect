/**
 * RIDES_DB
 * rides/${rideId}
 */

/**
 * User Object - 12params
 * @param {string} rideId key required uuid
 * @param {string} userId required SECURITY_KEY
 * @param {string} date required 
 * @param {boolean} discoverability required 
 * @param {string} location required
 * @param {string} rideType required
 * @param {string} time required
 * @param {string} timeStampRide required
 */

/**
 * RULES
 
 * Read - 
1. true for all authenticated users 

 * Create - 
1. request.auth.uid == request.resource.data.userId 
2. Should have all required params

 * Update - 
1. request.auth.uid == resource.data.userId 
2. Only discoverability can be updated, nothing else
2. Should have all non changeable params

 * Delete - 
1. false for everyone
 */
