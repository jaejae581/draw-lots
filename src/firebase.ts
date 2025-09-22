// 1. 필요한 기능(도구)들을 가져옵니다.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// 2. 내 프로젝트의 설정 정보
const firebaseConfig = {
    apiKey: "AIzaSyDnEc3JmN6tIkDfDie8j1Zt91RiQBM0Qxo",
    authDomain: "drawlots2025.firebaseapp.com",
    projectId: "drawlots2025",
    storageBucket: "drawlots2025.firebasestorage.app",
    messagingSenderId: "304365769262",
    appId: "1:304365769262:web:75841bf40a9155fd1845bf"
};

// 3. Firebase 공구함을 엽니다. (초기화)
const app = initializeApp(firebaseConfig);

// 4. 꺼내놓은 도구(Firestore, Auth)를 다른 곳에서도 쓸 수 있도록 준비시킵니다.
export const db = getFirestore(app);
export const auth = getAuth(app);