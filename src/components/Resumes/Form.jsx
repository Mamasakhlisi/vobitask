import React from 'react'
import scss from './style/Form.module.scss';

const Form = ({resumeFormHandler,resumeFormSubmit}) => {
    return (
        <form onSubmit={resumeFormSubmit}>
         <div className={scss.groupX2}>
            <div>
                <label>სახელი</label>
                <input type="text" name="name" onChange={resumeFormHandler}/>
            </div>
            <div className={scss.ml}>
                <label>გვარი</label>
                <input type="text" name="lastname" onChange={resumeFormHandler}/>
            </div>
        </div>   
         <div className={scss.group}>
            <label>მიმდინარე/ბოლო დამსაქმებელი</label>
            <input type="text" name="employer" onChange={resumeFormHandler}/>
        </div>   
         <div className={scss.group}>
            <label>მიმდინარე პოზიცია</label>
            <input type="text" name="position" onChange={resumeFormHandler}/>
        </div>      
         <div className={scss.group}>
            <label>ელფოსტა</label>
            <input type="email" name="email" onChange={resumeFormHandler}/>
        </div>   
         <div className={scss.group}>
            <label>ტელეფონი</label>
            <input type="text" name="phone" onChange={resumeFormHandler}/>
        </div>   
         <div className={scss.group}>
            <label>ატვირთე თქვენი რეზიუმე</label>
            <input type="file" name="file" onChange={resumeFormHandler}/>
        </div>   
        <div className={scss.group}>
            <label>სამოტივაციო წერილი</label>
            <textarea type="text" name="motivation" onChange={resumeFormHandler}/>
        </div> 
        <div className={scss.group}>
            <button type="submit">გაგზავნა</button>
        </div>
        </form>
    )
}

export default Form
