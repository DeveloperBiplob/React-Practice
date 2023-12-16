import { useState } from "react";

const ContactForm = () => {

    let [FormObject, SetObject] = useState({
        firstName:'',
        lastName:'',
        state:'',
        gender:''
    })

    const FormHandeler = (property, value)=>{
        SetObject(previusObject=>({
            ...previusObject,
            [property]: value
        }))

    }

    const FormSubmit = (e)=>{
        e.preventDefault();
        console.log(FormObject)
    }
    
    return (
        <div className="mb-5">
            <form onSubmit={FormSubmit} className="col-md-6 card p-3 m-auto mt-5">
                <h3 className="text-center text-success mb-3">Contact Form</h3>

                <div className="mb-2">
                    <label className="mb-1" htmlFor="">First Name:</label>
                    <input onChange={(e)=>{FormHandeler('firstName', e.target.value)}} type="text" value={FormObject.firstName} placeholder="Enter First Name" className="form-control" />
                </div>
                <div className="mb-2">
                    <label className="mb-1" htmlFor="">Last Name:</label>
                    <input onChange={(e)=>{FormHandeler('lastName', e.target.value)}} type="text" value={FormObject.lastName} placeholder="Last First Name" className="form-control" />
                </div>
                <div className="mb-2">
                    <label className="mb-1" htmlFor="">Select State:</label>
                    <select onChange={(e)=>FormHandeler('state', e.target.value)} value={FormObject.state} id="" className="form-control">
                        <option value="">Choose State</option>
                        <option value="Badda">Badda</option>
                        <option value="Rampura">Rampura</option>
                        <option value="Uttura">Uttura</option>
                        <option value="Mirpur">Mirpur</option>
                    </select>
                </div>
                <div className="mb-2">
                    <div className="form-check">
                        <input onChange={(e)=>{FormHandeler('gender', 'Male')}} checked={FormObject.gender ==="Male"} className="form-check-input" type="checkbox" name="gender"/>
                        <label className="form-check-label">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input onChange={(e)=>{FormHandeler('gender', 'Female')}} checked={FormObject.gender ==="Female"} className="form-check-input" type="checkbox" name="genderle"/>
                        <label className="form-check-label">
                            Female
                        </label>
                    </div>
                </div>
                <div className="mb-2">
                    <button className="btn btn-success w-100">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;