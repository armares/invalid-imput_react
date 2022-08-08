import React,{useState} from 'react';
import styles from './FormUser.module.css';
import Form from '../UI/Form';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Label from '../UI/Label';
import ErrorModal from '../UI/ErrorModal';

const FormUser = (props) => {
    const [enteredName,setEnteredName]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const [isNameValid,setIsNameValid]=useState(true);
    const [isAgeValid,setIsAgeValid]=useState(true);
    const [modalValid,setModalValid]=useState(false);
    const [errorMessage,setErrorMessage]=useState("Something went wrong!");

    const ChangeNameHandler=(e)=>{
        // console.log(e.target.value);
        if (e.target.value.trim().length>=0) {
            setEnteredName(e.target.value);
            setIsNameValid(true);
        }else{
            setIsNameValid(false);
        }
        
    }
    const ChangeAgeHandler=(e)=>{
        console.log(e.target.value);
        if (e.target.value.trim()>0) {
            setEnteredAge(e.target.value);
            setIsAgeValid(true);
        }else if(e.target.value.trim()==''){
            setIsAgeValid(true);
        }else{
            setIsAgeValid(false);
        }
        
    }
    const addDataHandler=(e)=>{
        e.preventDefault();
        if (enteredName.trim().length && enteredAge.trim().length && isNameValid && isAgeValid) {
            let a=enteredName.trim().length;
            console.log(a);
            props.onAddData({id:Math.random(),name:enteredName,age:enteredAge});
            setEnteredName('');
            setEnteredAge('');
        } else if (!isNameValid && !isAgeValid) {
            setErrorMessage("Something went wrong!");
            setModalValid(true);
        }else if (!isNameValid) {
            setErrorMessage('The camp Username is incorrect, try with other!');
            setModalValid(true);
        }else if (!isAgeValid) {
            setErrorMessage('The camp Age is incorrect, try with other!');
            setModalValid(true);
        }else{
            setErrorMessage("Something went wrong!");
            setModalValid(true);
            setIsNameValid(false);
            setIsAgeValid(false);
        }
    }
    const returnFormHandler=(validate)=>{
        console.log(validate);
        setModalValid(validate);
    }
  return (
        
    <div>
        {modalValid && <ErrorModal onReturnForm={returnFormHandler} title="An error occured!" message={errorMessage}/>} 
        <div>
            <Form onSubmit={addDataHandler}>
                <div>
                    <div className={styles.my5}>
                        <Label htmlFor='name'>Name</Label>
                        <Input id='name' value={enteredName} isValid={isNameValid} type='text' onChange={ChangeNameHandler}/>
                    </div>
                    <div>
                        <Label htmlFor='age'>Age</Label>
                        <Input id='age' value={enteredAge} isValid={isAgeValid} type='number' onChange={ChangeAgeHandler}/>
                    </div>
                </div>
                <Button type='submit' marginL='15px'>add User</Button>
            </Form>
        </div>
    </div>
  )
}

export default FormUser