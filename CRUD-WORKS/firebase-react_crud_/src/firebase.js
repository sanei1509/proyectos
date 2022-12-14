import app from "firebase/app";
import "firebase/firestore";
// FIREBASE CONFIG
// extraído mismo de la consola de firebase (proyecto correspondiente)
const firebaseConfig = {
  apiKey: "AIzaSyBx7an5gqojyb5Uohyrso3_yIvbwFnLZMA",
  authDomain: "crud-react-442bb.firebase.com",
  projectId: "crud-react-442bb",
  storageBucket: "crud-react-442bb.spot.com",
  messagingSenderId: "150119686698",
  Id: "1:150119686698:web:f58dc9d9d15932c971d953",
};

// INITIALIZE FIREBASE
// inicializamos la configuración de firebase
app.initializeApp(firebaseConfig);

export default app;
