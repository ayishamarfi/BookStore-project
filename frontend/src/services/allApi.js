 //import 

import { commonApi } from "./commonApi"
import { serverurl } from "./serverurl"

 
 //register api
 export const registerApi = async()=>{
     return commonApi('POST' , `${serverurl}/register` , reqBody)
 }