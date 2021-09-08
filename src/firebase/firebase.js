import app from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import firebaseConfig from './config'

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    async register(name, email, password, username) {
        const newUser = await this.auth.createUserWithEmailAndPassword(email, password)

        if(newUser.user.uid){
            const newUserDoc = {
                email: email,
                username: username,
                name: name,
                created: Date.now(),
                profileImg: "",
                bio: "",
                verified: false,
            }
            await firebase.db.collection('users').doc(newUser.user.uid).set(newUserDoc)
        } 
        
        return newUser.user.updateProfile({
            username: username,
        })
    }

    async login(email, password) {
        return await this.auth.signInWithEmailAndPassword(email, password)
    }

    async logout() {
        await this.auth.signOut()
    }

    async resetPassword(email) {
        await this.auth.sendPasswordResetEmail(email)
    }

}

const firebase = new Firebase();

export default firebase