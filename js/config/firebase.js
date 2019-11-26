import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyC5QT3Dn_s7ightMZzbcT5LyQfqSCtkt8c',
	authDomain: 'anxietyapp-7602e.firebaseapp.com',
	databaseURL: 'https://anxietyapp-7602e.firebaseio.com',
	projectId: 'anxietyapp-7602e',
	storageBucket: 'anxietyapp-7602e.appspot.com',
	messagingSenderId: '292753323957',
	appId: '1:292753323957:web:99915619fa6f90cc634bfc',
	measurementId: 'G-WC4G0H2KZN'
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
