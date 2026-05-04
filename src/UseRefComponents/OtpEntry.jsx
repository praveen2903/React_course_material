import { useRef, useState } from "react";

export default function OTPEntry(){
    const length =6;
    // const [otpCell, setOtpCell] = useState([...Array(length)]);  //undefined values in length of indexes
    const [otpCell, setOtpCell]= useState(Array(length).fill(''));
    // console.log(otpCell)
    const focusRef  = useRef([]); //assained to 0th index in input

    const handleChange= (value, index)=>{
        const numberRegex =  /^\d?$/;
        if(!numberRegex.test(value)) return;

        const copy = [...otpCell];
        copy[index] = value;
        setOtpCell(copy)

        if(value && index < length-1){
            focusRef.current[index+1].focus();
        }
    }

    const handleKeyDown = (event, index) =>{
        if ((event.key==='Backspace' || event.key==="Delete") && !otpCell[index] && index>0){
            focusRef.current[index-1].focus();
        }
    }

    const handlePaste = (event) =>{
        const pasteData = event.clipboardData.getData('text').slice(0,length);

        const numberRegex = /^\d+$/;  // string of numbers or bignumber + atleast 1, ? means 0/1 must be any number or empty

        if(!numberRegex.text(pasteData)) return;

        const copy = pasteData.split("");
        while(copy.length < length){
            copy.push('')
        }
        setOtpCell(copy);
    }


    return  (
        <div style={{padding:'30px'}}>
            <div>Enter OTP</div>
            {
                otpCell.map((digit, index)=>(
                    <>
                    <input key={index} value={digit} maxLength={1}
                        ref={(element)=> (focusRef.current[index]= element)}
                        onChange={(e)=> handleChange(e.target.value, index)}
                        onKeyDown={(e)=> handleKeyDown(e, index)}
                        onPaste={handlePaste}
                        style={{width:'60px', height:'60x', borderRadius:'16px', gap:'40px', marginRight:'12px',
                            border: '2px solid #ccc',
                            transition: '0.3s',
                            outline: 'none'
                        }}
                        onFocus={(e)=>{                      //the focus blur controlled by the ref input has default handlers
                            e.target.style.border= "2px solid #3b4382";
                            e.target.style.boxShadow= "0 0 10px #3bc4f6";
                        }}
                        onBlur={(e)=>{                      //focus must have blur as aftereffect
                            e.target.style.border= "2px solid #ccc";
                            e.target.style.boxShadow ='none';
                        }}
                    />
                    </>
                ))
            }
        </div>
    )

}