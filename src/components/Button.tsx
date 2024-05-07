interface Props {
   children?: string;
   color?: string;
   type: "btn" | "close-btn";
   onBtnClick: () => void;
}

function Button({ children, color = "primary", type, onBtnClick }: Props) {
   return (
      <button
         type="button"
         className={type === "close-btn" ? "btn-close" : "btn btn-" + color}
         data-bs-dismiss={type === "close-btn" ? "alert" : ""}
         aria-label={type === "close-btn" ? "Close" : ""}
         onClick={onBtnClick}
      >
         {children}
      </button>
   );
}

export default Button;
