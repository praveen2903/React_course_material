import { useRef } from "react";

const OtpEnter= ()=>{
    const otpRef= useRef([]);  // as it manages the array indexes so keep it [] else null if counter 0

    // const onlyIntegers = (inputEvent)=>{
    //     if(!/^d?$/.test(inputEvent)){
    //         inputEvent.target.value = '';
    //         return;
    //     }
    // }

    // const NextBlock= (inputEvent,index)=>{
    //     if(inputEvent.target.value && index<5) {
    //         otpRef.current[index+1].focus();
    //     }
    // }

    const handleChange = (inputEvent, index)=>{
        if(!/^\d?$/.test(inputEvent.target.value)){
            inputEvent.target.value = '';
            return;
        }
        if(inputEvent.target.value && index<5) {
            otpRef.current[index+1].focus(); // Ref is used only for uncontrolled event manipulates dom you can see it in ref thing
        }
    }

    const prevBlock = (input, index)=>{
        // console.log(input)
        if((input.key=="Backspace" || input.key=="Delete") && !input.target.value && index>0){
            otpRef.current[index-1].focus();
        }
    }
    return (
        <div>
            <div>Otp Entering</div>
            {
                [0,1,2,3,4,5].map((index)=>(
                    <input key={index} 
                        maxLength='1'

                        ref={(element)=> otpRef.current[index]=element}

                        // onChange={(inputEvent)=>{ NextBlock(inputEvent,index); onlyIntegers(inputEvent)}} 
                        // --moves to next block event though if not integer so including both in one block

                        onChange={(inputEvent)=> handleChange(inputEvent, index)}

                        onKeyDown={(inputEvent)=> prevBlock(inputEvent, index)}
                        style={{width:'60px', height:'60x', borderRadius:'16px', gap:'40px', marginRight:'12px',
                            border: '2px solid #ccc',
                            transition: '0.3s',
                            outline: 'none'
                        }}
                        onFocus={(e)=>{                                     //the focus blur controlled by the ref input has default handlers
                            e.target.style.border= "2px solid #3b4382";
                            e.target.style.boxShadow= "0 0 10px #3bc4f6";
                        }}
                        onBlur={(e)=>{
                            e.target.style.border= "2px solid #ccc";
                            e.target.style.boxShadow ='none';
                        }}
                    />
                ))
            }
        </div>
    )

}
export default OtpEnter;