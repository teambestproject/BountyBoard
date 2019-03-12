import app from 'firebase/app';
import { firebaseConfig } from './config';

export default class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig);
    }
}