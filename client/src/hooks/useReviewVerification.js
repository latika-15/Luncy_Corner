import { useState } from "react";
import { verifyCode } from "../services/testimonialService";

export default function useReviewVerification(){

    const [code,setCode]=useState("");

    const [loading,setLoading]=useState(false);

    const [verified,setVerified]=useState(false);

    const [clientName,setClientName]=useState("");

    const [error,setError]=useState("");

    const verify=async()=>{

        setLoading(true);

        setError("");

        try{

            const data=await verifyCode(code);

            setVerified(true);

            setClientName(data.clientName);

        }

        catch(err){

            setError(err.message);

        }

        finally{

            setLoading(false);

        }

    }

    return{

        code,

        setCode,

        verified,

        clientName,

        loading,

        error,

        verify

    }

}