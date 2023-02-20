import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBYFCesl8X-K56u9Ke9ytGQ-dmZb3ID46Q",
  authDomain: "spupload-7a2f3.firebaseapp.com",
  projectId: "spupload-7a2f3",
  storageBucket: "spupload-7a2f3.appspot.com",
  messagingSenderId: "83277571031",
  appId: "1:83277571031:web:96b2209b02903c43bea192",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
