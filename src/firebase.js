import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

const config = {
	apiKey: "AIzaSyCrq4X1--QRt9sy4kIxZA1ls46F7bTTOhA",
	authDomain: "mancity-6bce4.firebaseapp.com",
	databaseURL: "https://mancity-6bce4.firebaseio.com",
	projectId: "mancity-6bce4",
	storageBucket: "mancity-6bce4.appspot.com",
	messagingSenderId: "382227722103"
}

firebase.initializeApp(config)

const db = firebase.database()
const matches = db.ref('matches')
const promotions = db.ref('promotions')

export {
	firebase,
	matches,
	promotions
}
