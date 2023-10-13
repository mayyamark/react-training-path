import { forwardRef, useImperativeHandle, useRef } from 'react'

const TextArea = forwardRef((props, ref) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        if (textAreaRef.current) {
          textAreaRef.current.focus();
          textAreaRef.current.style.backgroundColor = 'aliceblue';
        }
        console.log('Custom focus called!')
      }
    }
  }, []);

  return <textarea {...props} ref={textAreaRef} />
});

export default TextArea;