import * as firebase from 'firebase';

import { FirebaseConfig } from '../config/keys';
firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
export const users = databaseRef.child('users');
export const artist = databaseRef.child('artists');
export const events = databaseRef.child('events');
