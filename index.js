import React, {useState} from 'react';

function FormSubmission(){
    const[formData,setFormData]=useState([]);
    const[firstName,setFirstName]=useState("");
    const[LastName,setLastName]=useState("");
    const[email,setEmail]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        const existingSubmission=formData.find((data)=>data.email===email);

        if(existingSubmission){
            const updatedFormData=formData.map((data)=>{
                if(data.email===email){
                    return {...data,submissionCount:data.submissionCount+1};
                }
                return data;
            });
            setFormData(updatedFormData);
        }else{
            const newSubmission={firstName,lastName,email,submissionCount: 1};
            setFormData([...formData,newSubmission]);
        }

        setFirstName("");
        setLastName("");
        setEmail("");

    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
           
            <label>Firstname:
                <input type="text" value="{firstName}" onChange={(e)=>
                setFirstName(e.target.value)}/>
            </label><br/>
            <label>LastName:
                <input type="text" value="{lastName}" onChange={(e)=>
                setLasttName(e.target.value)}/>
            </label><br/>
            <label>Email:
                <input type="email" value="{email}" onChange={(e)=>
                setEmail(e.target.value)}/>
            </label><br/>
            <input type="submit" value="Submit"/>


            </form>

            <table>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Lasttname</th>
                        <th>Email</th>
                        <th>Submissions Count</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((data,index)=>(
                        <tr key={index}>
                            <td>{data.firstName}</td>
                            <td>{data.lastName}</td>
                            <td>{data.email}</td>
                            <td>{data.submissionCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default FormSubmission;