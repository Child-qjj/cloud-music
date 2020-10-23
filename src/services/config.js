const devBaseURL = "http://39.108.125.224:3000/";
const proBaseURL = "http://39.108.125.224:3000/";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL:proBaseURL;

export const TIMEOUT = 5000;