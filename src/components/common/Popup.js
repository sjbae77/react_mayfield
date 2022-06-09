import { useEffect } from "react";

function Popup({ children, setOpen }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <aside className="pop">
      <div className="cont">
        {children}
        <span className="btnClose" onClick={() => setOpen(false)}>
          close
        </span>
      </div>
    </aside>
  );
}

export default Popup;
