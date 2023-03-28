const devBaseURL= "http://localhost:3000";
const proBaseURL= "http://localhost:3000";
export const BASE_URL = process.env.NODE_ENV === 'development'? devBaseURL:proBaseURL;

export const TIMEOUT =10000;

export const RETRY = 3;
export const RETRY_DELAY = 10000;

