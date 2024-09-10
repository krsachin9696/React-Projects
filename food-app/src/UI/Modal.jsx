import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Modal({children, open, className=""}) {
  const dialog = useRef();
  console.log(open, "this is open prop")

  useEffect(() => {
    console.log("this is open parameter", open)
    if(open) {
      dialog.current.showModal();
    }
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`}>
      {children}
    </dialog>, 
    document.getElementById('modal')
  );
}