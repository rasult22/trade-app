// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAXchCL2JydXdjO9ry9hJGqsRxRuyFWC4U',
  authDomain: 'vue-firebase-44e89.firebaseapp.com',
  databaseURL: 'https://vue-firebase-44e89.firebaseio.com',
  projectId: 'vue-firebase-44e89',
  storageBucket: 'vue-firebase-44e89.appspot.com',
  messagingSenderId: '33044406352',
  appId: '1:33044406352:web:9a14c2e3bd33a909ab7155'
}

// Initialize Firebase
export const initApp = () => initializeApp(firebaseConfig)
