import styles from "./Button.module.css";

interface Props {
  children: String;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={[styles.btn].join(" ")} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
