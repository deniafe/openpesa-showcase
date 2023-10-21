import { User } from 'firebase/auth';
import {
  QueryDocumentSnapshot,
  doc,
  getDoc,
  setDoc,
  updateDoc
} from 'firebase/firestore'
import { db } from './init';
import { AdditionalInformation, UserData } from '@/lib/types';
import { errorMessage } from './error_message';
import { successMessage } from './success_message';

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
) => {

  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  let user = null,
    error = null

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });

      user = userSnapshot as QueryDocumentSnapshot<UserData>
      successMessage("Authentication successful 🎉")

    } catch (e) {
      error = e
      console.log('error creating the user', e);
      errorMessage(e + "❌")
    }
  }

  return {user, error}
};

export const updateProfileInFirestore = async (userId: string, newDisplayName: string, newEmail: string) => {
  const userDocRef = doc(db, 'users', userId);

  try {
    await updateDoc(userDocRef, {
      displayName: newDisplayName,
      email: newEmail,
    });
    console.log('Profile updated successfully in Firestore.');
  } catch (error) {
    errorMessage(error + "❌")
    console.error('Error updating profile in Firestore:', error);
  }
};