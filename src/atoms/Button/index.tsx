import styles from "./styles.module.css";

type Props = {
  variant?: "rounded" | "fulfilled";
} & React.ComponentProps<"button">;

export const Button: React.VFC<Props> = ({ variant = "fulfilled", ...props }) => {
  return <button {...props} className={`${styles.common} ${styles[variant]}`} />;
};
