import styles from "./button.module.css"



const Button = ({ onclick, type = "submit", children }) => {
    return <button onClick={onclick} type={type} className={styles.btn}>{children}</button>
}

export default Button;