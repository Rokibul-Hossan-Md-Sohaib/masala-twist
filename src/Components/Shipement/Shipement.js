import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import "./Shipement.css"
import Thank from "./Thank";

const Shipement= () =>  {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);
  const [shipInfoAdded, setShipInfoAdded] =useState(null);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(watch("example")); // watch input value by passing the name of it
  const onSubmit = data => {
    setShipInfoAdded(data);
    //move this after payment
    console.log(setLoggedInUser);
    
  }
  return (
 <div>
 <div style={{display: shipInfoAdded && 'none'}} >
   {/* "handleSubmit" will validate your inputs before invoking "onSubmit"  */}
    <form className="ship-form"  onSubmit={handleSubmit(onSubmit)} >
  
      {/* register your input into the hook by invoking the "register" function */}
      <input name ="name"  {...register("exampleRequired", { required: true })}  placeholder="Name"/>
      {errors.exampleRequired && <span>This field is required</span>}
<br />
        <input name ="address1"{...register("exampleRequired", { required: true })} placeholder="Address"/>
        {errors.exampleRequired && <span>This field is required</span>}

<br />
      {/* include validation with required or other standard HTML validation rules */}
      <input name ="address2" {...register("exampleRequired", { required: true })} placeholder="Address" />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

<br />
      <input names="number" type = "tel"{...register("exampleRequired", { required: true })} placeholder="Phone Number"/>
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

<br />
   
      <button class="btn btn-danger"type="submit" >Submit</button>
    </form>
   </div>
   <div style={{display: shipInfoAdded ? 'block' : 'none'}} >
     <Thank/>

   </div>
 </div>
  );
}

export default Shipement;