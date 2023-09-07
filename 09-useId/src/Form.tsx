import { useId } from "react";

const Form = () => {
  const id = useId();
  
  return (
    <form>   
      <label htmlFor={`${id}-name`}>
        Name {id}
      </label>
      <input id={`${id}-name`} />

      <label htmlFor={`${id}-age`}>
        Age {id}
      </label>
      <input id={`${id}-name`}/>
    </form>
)}

export default Form;
