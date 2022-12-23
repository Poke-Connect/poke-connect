/**
 * RIDES_DB
 * rides/${rideId}
 */

export interface IRide {
  createdAt: Date;
  rideId: string;
  userId: string;
  date: string;
  discoverability: boolean;
  location: string;
  rideType: string;
  time: string;
  timeStampRide: number;
}

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
