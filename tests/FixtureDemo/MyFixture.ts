import { test as _test } from "@playwright/test";
import  Homepage  from '../Homepage'
type URL = {
    name : string;
    age : number;
    homepage : Homepage;

}
export const test = _test.extend<URL>({
    name : "Mayank",
    age : 22,

    homepage : async({page},use)=>{
        await use(new Homepage(page))
    }
})