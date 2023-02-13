import firebase from "firebase/compat/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlBpfmYv_WpkcSYd5SUX-zT5bQRmQcRF4",
  authDomain: "tadbeer-e57d7.firebaseapp.com",
  projectId: "tadbeer-e57d7",
  storageBucket: "tadbeer-e57d7.appspot.com",
  messagingSenderId: "77101142872",
  appId: "1:77101142872:web:b7653843f452d3e935cb2d",
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}
