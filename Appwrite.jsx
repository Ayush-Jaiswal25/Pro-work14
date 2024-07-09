import { Client, Account, ID } from "appwrite";
import { newNumber, OTP_Value1 } from "./src/Components/Body/Body";
import toast from 'react-hot-toast';

export let userId, sessionId;
const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('6670ed2a002e08747987');

const account = new Account(client);

export async function appwriteSendOTP(){
    const token = await account.createPhoneToken(ID.unique(), newNumber);
    userId = token.userId;
}

export async function appwriteSubmitOTP(){
    const create_session = await account.createSession(userId, OTP_Value1);
    sessionId = create_session.$id
    
}

export async function appwriteLogOUT(){
    console.log(userId);
    const delete_session = await account.deleteSessions(userId);
    console.log(delete_session)
    const waiting1 = new Promise(resolve => setTimeout(resolve, 1000));
    toast.promise(
        waiting1, { loading: 'Logging Out..', success: <b className='toaastred'>Logged Out</b>, error: <b>Something went wrong, try again</b>, }, {iconTheme: {primary: 'red'}}
    );
}