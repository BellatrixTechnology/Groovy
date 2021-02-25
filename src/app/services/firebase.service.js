import firebase from 'firebase';
class FirebaseService {

    initApp() {
        var firebaseConfig = {
            apiKey: "AIzaSyDqxWP0jHqapl3x54Fp_41Qx95M56cAvdQ",
            authDomain: "groovy-staging-new.firebaseapp.com",
            databaseURL: "https://groovy-staging-new.firebaseio.com",
            projectId: "groovy-staging-new",
            storageBucket: "groovy-staging-new.appspot.com",
            messagingSenderId: "976795594697",
            appId: "1:976795594697:web:4120b6ff9586a40ac3c218",
            measurementId: "G-5180YGECT6"
        };
        // Initialize Firebase
        console.log("firebase.apps.length", firebase.apps.length);
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
            firebase.analytics();
        }
    }

    //info is an object contains email and password
    signInAdmin(info) {
        return firebase.auth().signInWithEmailAndPassword(info.email, info.password);
    }

}

const firebaseService = new FirebaseService();
export default firebaseService;