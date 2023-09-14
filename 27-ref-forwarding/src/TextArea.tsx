import { forwardRef } from "react"

const TextArea = forwardRef<HTMLTextAreaElement>((props, ref) => {
  return <textarea {...props} ref={ref} />
});

export default TextArea;