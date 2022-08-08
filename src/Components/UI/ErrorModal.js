import React from 'react';
import Button from './Button';
import styles from './ErrorModal.module.css';
import Card from './Card';

const ErrorModal = (props) => {
    const returnFormHandler=(e)=>{
        e.preventDefault();
        console.log('ciao');
        props.onReturnForm(false);
    }
  return (
    <div>
        <div className={styles.backdrop}/>
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={returnFormHandler} >Okay</Button>
            </footer>
        </Card>
    </div>
  )
}

export default ErrorModal