import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBCIANuZ1i9UD2RY6EKdLznb_ZlGBCIOM0',
  authDomain: 'whatsapp-clone-98630.firebaseapp.com',
  projectId: 'whatsapp-clone-98630',
  storageBucket: 'whatsapp-clone-98630.appspot.com',
  messagingSenderId: '582897879522',
  appId: '1:582897879522:web:d1ba79d96a27bc61ec11bb',
  measurementId: 'G-LSMXGPHE3P',
}

const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)
