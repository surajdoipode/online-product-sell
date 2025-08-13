import styles from "./Button.module.css"
const Button1=({lable,func})=>{
    return( <>   
     <button
      onClick={func}
       className={styles['btn']}>{lable}</button>
    </>
    );
}
export default Button1;