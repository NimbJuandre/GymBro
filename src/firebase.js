import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCL3KtIUEXgJfNBsNZ_IhIeo_Y4AHWt8JE",
  authDomain: "gymbro-61f80.firebaseapp.com",
  projectId: "gymbro-61f80",
  storageBucket: "gymbro-61f80.appspot.com",
  messagingSenderId: "867847316932",
  appId: "1:867847316932:web:9f9f65d5dda799bef33091"
};

  export default {
    auth: firebase.auth(),
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
        })
    },
    logout() {
      firebase.auth().signOut()
      .then(function() {})
      .catch(function(error) {
        console.log(error)});
    }
}