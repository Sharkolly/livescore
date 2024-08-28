// https://apiv2.allsportsapi.com/football/?&met=Topscorers&leagueId=168&APIkey=557d0e928ac6e5ad33a8c89b85b5f8345800f14b9ef1693f7e9f51ed9e772b4d
// https://apiv2.allsportsapi.com/football/?&met=Topscorers&leagueId=152&APIkey=557d0e928ac6e5ad33a8c89b85b5f8345800f14b9ef1693f7e9f51ed9e772b4d

//3, 98,    207

//club random numbers 96, 100, 102, 85  https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=100&APIkey=557d0e928ac6e5ad33a8c89b85b5f8345800f14b9ef1693f7e9f51ed9e772b4d

//players stats https://apiv2.allsportsapi.com/football/?&met=Players&playerId=103051168&APIkey=557d0e928ac6e5ad33a8c89b85b5f8345800f14b9ef1693f7e9f51ed9e772b4d

//using name https://apiv2.allsportsapi.com/football/?&met=Players&playerName=neymar&APIkey=557d0e928ac6e5ad33a8c89b85b5f8345800f14b9ef1693f7e9f51ed9e772b4d;

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  GoogleAuthProvider,

} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAZV_MUTfz_pXMdv3PAGi1HlpA9EzwS8Xk",
  authDomain: "my-first--firebase-projec.firebaseapp.com",
  projectId: "my-first--firebase-projec",
  storageBucket: "my-first--firebase-projec.appspot.com",
  messagingSenderId: "54000756144",
  appId: "1:54000756144:web:f02a3ec4af1a21abc32275",
  measurementId: "G-K4T4DKKZB8",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();