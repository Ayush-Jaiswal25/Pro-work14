import { createContext, useState } from 'react';
import { useCookies } from 'react-cookie';
export const MyContext = createContext(null);

const MyContextProvider = (props) =>{

    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [houseNo, sethouseNo] = useState("")
    const [streetaddre, setstreetaddre] = useState("")
    const [pinCode, setpinCode] = useState("")

    const [editDetails, seteditDetails] = useState(false)

    const [cookies, setCookie, removeCookie] = useCookies(['sessionID'])
    const [signupUser, setsignupUser, removesignupUser] = useCookies(['signupuserid'])
    const [signupUserNum, setsignupUserNum, removesignupUserNum] = useCookies(['signupusernum'])

   const contextValue = {
    cookies, setCookie, removeCookie,
    signupUser, setsignupUser, removesignupUser,
    signupUserNum, setsignupUserNum, removesignupUserNum,
    Name, setName,
    Email, setEmail,
    houseNo, sethouseNo,
    streetaddre, setstreetaddre,
    pinCode, setpinCode,
    editDetails, seteditDetails
   }

    return(
        <MyContext.Provider value={contextValue}>
            {props.children}
        </MyContext.Provider>
    )
}
export default MyContextProvider;