import { useState } from "react";

export default function FormShowError(){
    const [formInput, setFormInputs]= useState({
        name:'',
        email:'',
        phoneNumber: '',
        age: '',
        noOfMembers:''
    })
    const [formErrors, setFormErrors]= useState({
        nameError:'',
        emailError:'',
        phoneNumberError:'',
        ageError:'',
        noOfMembersError:''
    })
    const [formValid, setFormValid] = useState({
        nameValid: false,
        emailValid: false,
        phoneNumberValid: false,
        ageValid: false,
        noOfMembersValid: false,
        buttonActive: false
    })
    const handleInputChange=(event)=>{
        setFormInputs({
            ...formInput,
            [event.target.name]: event.target.value,
        });
        handleValidation(event.target.name,event.target.value)
    }

    const handleValidation=(fieldName, value)=>{
        
        switch (fieldName) {
            case 'name':
                if (!value.trim()) {
                    setFormErrors({
                        ...formErrors,
                        nameError: "Name is required",
                    });
                    setFormValid({...formValid, nameValid: true})
                } else if (value.trim().length < 3) {
                    setFormErrors({
                        ...formErrors,
                        nameError: "Name must be at least 3 characters",
                    });
                    setFormValid({...formValid, nameValid: false})
                } else if (value.trim().length > 20) {
                    setFormErrors({
                        ...formErrors,
                        nameError: "Name cannot exceed 20 characters",
                    });
                    setFormValid({...formValid, nameValid: false})
                } else {
                    setFormErrors({
                        ...formErrors,
                        nameError: "",
                    });
                    setFormValid({...formValid, nameValid: true})
                }
                break;
            case 'email':
                if(!value.includes('@')){
                    setFormErrors({
                        ...formErrors,
                        emailError: 'Email must contain @',
                    });
                    setFormValid({...formValid,emailValid: false,});

                }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
                    setFormErrors({
                        ...formErrors,
                        emailError: 'Email is invalid',
                    });
                    setFormValid({...formValid,emailValid: false,});
                }else{
                    setFormErrors({
                        ...formErrors,
                        emailError: '',
                    });
                    setFormValid({...formValid, emailValid: true,});
                }
                break;
            case 'phoneNumber':
                if(value.trim().length<10){
                    setFormErrors({
                        ...formErrors,
                        phoneNumberError: 'Phone number must be at least 10 digits long',
                    });
                    setFormValid({...formValid,phoneNumberValid: false,});
                }else{
                    setFormErrors({
                        ...formErrors,
                        phoneNumberError: '',
                    });
                    setFormValid({...formValid,phoneNumberValid: true,});
                }
                break;
            case 'age':
                if(value<18){
                    setFormErrors({
                        ...formErrors,
                        ageError: 'Age must be at least 18',
                    });
                    setFormValid({...formValid, ageValid: false,});
                }else{
                    setFormErrors({
                        ...formErrors,
                        ageError: '',
                    });
                    setFormValid({...formValid, ageValid: true,});
                }
                break;
            case 'noOfMembers':
                if(value<1){
                    setFormErrors({
                        ...formErrors,
                        noOfMembersError: 'Number of members must be at least 1',
                    });
                    setFormValid({...formValid,noOfMembersValid: false,});
                }else if(value<6){
                    setFormErrors({
                        ...formErrors,
                        noOfMembersError: 'Maximum No of members 6',
                    });
                    setFormValid({...formValid,noOfMembersValid: false,});
                } else{
                    setFormErrors({
                        ...formErrors,
                        noOfMembersError: '',
                    });
                    setFormValid({...formValid, noOfMembersValid: true,});
                }
                break;
        }
        setFormValid({
            ...formValid,
            buttonActive: formValid.nameValid && formValid.emailValid && formValid.phoneNumberValid && formValid.ageValid && formValid.noOfMembersValid
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Form Submitted Successfully",formInput);
    }
    

    return (
        <div>
            <h1>FormShowError</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", flexDirection: "column", gap: "40px", maxWidth: "400px",}}>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" value={formInput.name} onChange={handleInputChange} placeholder="Enter Name" />
                        {formErrors.nameError && (
                            <p style={{ color: "red", margin: 0 }}>{formErrors.nameError}</p>
                        )}
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="email" name="email" value={formInput.email} onChange={handleInputChange} placeholder="Enter Email" />
                        {formErrors.emailError && (
                            <p style={{ color: "red", margin: 0 }}>{formErrors.emailError}</p>
                        )}
                    </div>

                    <div>
                        <label>Phone Number</label>
                        <input type="text" name="phoneNumber" value={formInput.phoneNumber} onChange={handleInputChange} placeholder="Enter Phone Number" />
                        {formErrors.phoneNumberError && (
                            <p style={{ color: "red", margin: 0 }}>
                                {formErrors.phoneNumberError}
                            </p>
                        )}
                    </div>

                    <div>
                        <label>Age</label>
                        <input type="text" name="age" value={formInput.age} onChange={handleInputChange} placeholder="Enter Age"/>
                        {formErrors.ageError && (
                        <p style={{ color: "red", margin: 0 }}>
                            {formErrors.ageError}
                        </p>
                        )}
                    </div>

                    <div>
                        <label>No Of Members</label>
                        <input type="text" name="noOfMembers" value={formInput.noOfMembers} onChange={handleInputChange} placeholder="Enter Number Of Members"/>
                        {formErrors.noOfMembersError && (
                        <p style={{ color: "red", margin: 0 }}>
                            {formErrors.noOfMembersError}
                        </p>
                        )}
                    </div>

                    <button type="submit" disabled={!formValid.buttonActive} style={{ opacity: formValid.buttonActive ? 1 : 0.5,}}>
                        Submit
                    </button>
                    </div>   
            </form>

            <h3>Code For The Above Form -- forms for it please and form validations and state updates neatly please</h3>
        <pre>
            {`import { useState } from "react";

export default function FormShowError(){
    const [formInput, setFormInputs]= useState({
        name:'',
        email:'',
        phoneNumber: '',
        age: '',
        noOfMembers:''
    })
    const [formErrors, setFormErrors]= useState({
        nameError:'',
        emailError:'',
        phoneNumberError:'',
        ageError:'',
        noOfMembersError:''
    })
    const [formValid, setFormValid] = useState({
        nameValid: false,
        emailValid: false,
        phoneNumberValid: false,
        ageValid: false,
        noOfMembersValid: false,
        buttonActive: false
    })
        
    const handleInputChange=(event)=>{
        setFormInputs({
            ...formInput,
            [event.target.name]: event.target.value,
        });
        handleValidation(event.target.name,event.target.value)
    }

    const handleValidation=(fieldName, value)=>{
        
        switch (fieldName) {
            case 'name':
                if (!value.trim()) {
                    setFormErrors({
                        ...formErrors,
                        nameError: "Name is required",
                    });
                    setFormValid({...formValid, nameValid: true})
                } else if (value.trim().length < 3) {
                    setFormErrors({
                        ...formErrors,
                        nameError: "Name must be at least 3 characters",
                    });
                    setFormValid({...formValid, nameValid: false})
                } else if (value.trim().length > 20) {
                    setFormErrors({
                        ...formErrors,
                        nameError: "Name cannot exceed 20 characters",
                    });
                    setFormValid({...formValid, nameValid: false})
                } else {
                    setFormErrors({
                        ...formErrors,
                        nameError: "",
                    });
                    setFormValid({...formValid, nameValid: true})
                }
                break;
            case 'email':
                if(!value.includes('@')){
                    setFormErrors({
                        ...formErrors,
                        emailError: 'Email must contain @',
                    });
                    setFormValid({...formValid,emailValid: false,});

                }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)){
                    setFormErrors({
                        ...formErrors,
                        emailError: 'Email is invalid',
                    });
                    setFormValid({...formValid,emailValid: false,});
                }else{
                    setFormErrors({
                        ...formErrors,
                        emailError: '',
                    });
                    setFormValid({...formValid, emailValid: true,});
                }
                break;
            case 'phoneNumber':
                if(value.trim().length<10){
                    setFormErrors({
                        ...formErrors,
                        phoneNumberError: 'Phone number must be at least 10 digits long',
                    });
                    setFormValid({...formValid,phoneNumberValid: false,});
                }else{
                    setFormErrors({
                        ...formErrors,
                        phoneNumberError: '',
                    });
                    setFormValid({...formValid,phoneNumberValid: true,});
                }
                break;
            case 'age':
                if(value<18){
                    setFormErrors({
                        ...formErrors,
                        ageError: 'Age must be at least 18',
                    });
                    setFormValid({...formValid, ageValid: false,});
                }else{
                    setFormErrors({
                        ...formErrors,
                        ageError: '',
                    });
                    setFormValid({...formValid, ageValid: true,});
                }
                break;
            case 'noOfMembers':
                if(value<1){
                    setFormErrors({
                        ...formErrors,
                        noOfMembersError: 'Number of members must be at least 1',
                    });
                    setFormValid({...formValid,noOfMembersValid: false,});
                }else if(value<6){
                    setFormErrors({
                        ...formErrors,
                        noOfMembersError: 'Maximum No of members 6',
                    });
                    setFormValid({...formValid,noOfMembersValid: false,});
                } else{
                    setFormErrors({
                        ...formErrors,
                        noOfMembersError: '',
                    });
                    setFormValid({...formValid, noOfMembersValid: true,});
                }
                break;
        }
        setFormValid({
            ...formValid,
            buttonActive: formValid.nameValid && formValid.emailValid && formValid.phoneNumberValid && formValid.ageValid && formValid.noOfMembersValid
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Form Submitted Successfully",formInput);
    }
    

    return (
        <div>
            <h1>FormShowError</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", flexDirection: "column", gap: "40px", maxWidth: "400px",}}>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" value={formInput.name} onChange={handleInputChange} placeholder="Enter Name" />
                        {formErrors.nameError && (
                            <p style={{ color: "red", margin: 0 }}>{formErrors.nameError}</p>
                        )}
                    </div>

                    <div>
                        <label>Email</label>
                        <input type="email" name="email" value={formInput.email} onChange={handleInputChange} placeholder="Enter Email" />
                        {formErrors.emailError && (
                            <p style={{ color: "red", margin: 0 }}>{formErrors.emailError}</p>
                        )}
                    </div>

                    <div>
                        <label>Phone Number</label>
                        <input type="text" name="phoneNumber" value={formInput.phoneNumber} onChange={handleInputChange} placeholder="Enter Phone Number" />
                        {formErrors.phoneNumberError && (
                            <p style={{ color: "red", margin: 0 }}>
                                {formErrors.phoneNumberError}
                            </p>
                        )}
                    </div>

                    <div>
                        <label>Age</label>
                        <input type="text" name="age" value={formInput.age} onChange={handleInputChange} placeholder="Enter Age"/>
                        {formErrors.ageError && (
                        <p style={{ color: "red", margin: 0 }}>
                            {formErrors.ageError}
                        </p>
                        )}
                    </div>

                    <div>
                        <label>No Of Members</label>
                        <input type="text" name="noOfMembers" value={formInput.noOfMembers} onChange={handleInputChange} placeholder="Enter Number Of Members"/>
                        {formErrors.noOfMembersError && (
                        <p style={{ color: "red", margin: 0 }}>
                            {formErrors.noOfMembersError}
                        </p>
                        )}
                    </div>

                    <button type="submit" disabled={!formValid.buttonActive} style={{ opacity: formValid.buttonActive ? 1 : 0.5,}}>
                        Submit
                    </button>
                    </div>   
            </form>
        </div>
    );
}`}
        </pre>
        </div>
    );
}