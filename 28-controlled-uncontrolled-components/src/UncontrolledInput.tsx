import { useRef } from "react";

const UncontrolledInput = () => {
  const ref = useRef<HTMLInputElement | null>(null);

  console.log("Uncontrolled form re-rendered", { ref })

  return (
    <div>
      <label htmlFor="uncontrolled">Uncontrolled Input</label>
      <input id="uncontrolled" type="text" ref={ref} />
    </div>
  );
}

export default UncontrolledInput;
