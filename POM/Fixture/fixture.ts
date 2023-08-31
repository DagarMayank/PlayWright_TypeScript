import {Expect, test as _test} from "@playwright/test"

import Register from "../Pages/RegisterationPage"
import login from "../Pages/LoginPage"
import Header_Navigation from "../Pages/Header_NavigationPanel"
import orderPlaced  from "../Pages/OrderSearch"


type pages = {
    loginPage : login,
    registerPage : Register,
    headerNavigation : Header_Navigation,
    orderPage : orderPlaced,
    userName : string,
    password : string,
    except : Expect,
}


const fixtures = _test.extend<pages>({
     userName  :  "Ballu.Badmass@gmail.com",
     password  :   "India@1234",

     
    loginPage :  async({page},use)=>{
        await use(new login(page))
    },
    registerPage : async({page},use)=>{
        await use(new Register(page))
    },
    headerNavigation : async({page},use)=>{
        await use(new Header_Navigation(page))
    },
    orderPage : async({page},use)=>{
        await use(new orderPlaced(page))
    }    

})
export const test = fixtures
export const  verify = test.expect.soft