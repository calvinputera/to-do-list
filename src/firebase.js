// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDxoFtoP7HOS1AmPQKz8XV_IhzDzuM4rYY",
	authDomain: "todo-list-74a7b.firebaseapp.com",
	projectId: "todo-list-74a7b",
	storageBucket: "todo-list-74a7b.appspot.com",
	messagingSenderId: "629029971486",
	appId: "1:629029971486:web:d0acded59ccc0372b3700f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
	signInWithPopup(auth, provider)
		.then((resp) => {
			// console.log(resp);
			const email = resp.user.email;
			// localStorage.setItem("email", email);
		})
		.catch((err) => alert(err));
};
