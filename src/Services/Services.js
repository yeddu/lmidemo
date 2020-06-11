import axios from 'axios';
import {headers,restPassword,restUserName} from './ServicesConsts'


// fucntion which implements the  get method using axios a common template which accepts only the uri and is i
// it a authenticated service or not if it is quthnticated we wikk be set the var to true

export  const getData=(url,isCredrequired,paramsFromFunc)=>{
    paramsFromFunc["format"]="JSON";
    return  axios ({

                "method":"get",
                "url":url,                
                "headers":headers,
                "withCredentials":isCredrequired,
                "timeout":0,        
                "responseType":"json",
                "auth":{
                    "username":restUserName,
                    "password":restPassword
                },
                "params":paramsFromFunc
            })

}

export const postData=(url,isCredrequired,reqBody)=>{

    return  axios ({

        "method":"post",
        "url":url,                
        "headers":headers,
        "withCredentials":isCredrequired,
        "timeout":0,        
        "responseType":"json",
        "auth":{
            "username":restUserName,
            "password":restPassword
        },
        data:reqBody
        
    })
}

export const deleteByID =(url,isCredrequired,paramsFromFunc)=>{
    
    paramsFromFunc["format"]="JSON";
    return  axios ({

                "method":"get",
                "url":url,                
                "headers":headers,
                "withCredentials":isCredrequired,
                "timeout":0,        
                "responseType":"json",
                "auth":{
                    "username":restUserName,
                    "password":restPassword
                },
                "params":paramsFromFunc
            })

}