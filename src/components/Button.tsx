
interface Props {
   color?: string;
   children: string;
   onBtnClick: () => void;
}

const Button = ({ color = "primary", children, onBtnClick }: Props) => {
   return (
      <button
         type="button"
         className={"btn" + " btn-" + color}
         onClick={onBtnClick}
      >
         {children}
      </button>
   );
};

export default Button;
