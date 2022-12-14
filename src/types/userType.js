/**
 * USERS_DB
 * users/${uid}
 */

//TODO:
//1. seperate private and public info

/**
 * User Object - 12params
 * @param {string} uid key required auth
 * @param {string} displayName required auth
 * @param {string} email required auth
 * @param {string} firstName creted required
 * @param {string} lastName created required
 * @param {string} photoURL created required
 * @param {string} gender optional
 * @param {string} mobile optional
 * @param {string} linkedin optional
 * @param {string} occupation optional
 * @param {string} company optional
 * @param {string} about optional
 */

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