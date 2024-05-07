import Button from "./Button";

interface Props {
   children: string;
   onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
   return (
      <div
         className="alert alert-warning alert-dismissible fade show"
         role="alert"
         id="myAlert"
      >
         {children}
         <Button
            type="close-btn"
            onBtnClick={onClose}
         />
      </div>
   );
};

export default Alert;
