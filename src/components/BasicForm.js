import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredLastName,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (enteredName && enteredLastName && enteredEmail) {
    formIsValid = true;
  }

  const inputSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  }

  const inputNameClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control'

  const inputLastNameClasses = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control'

  const inputEmailClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={inputSubmissionHandler}>
      <div className='control-group'>
        <div className={inputNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameInputHasError && <p className='error-text'>Name must not be empty.</p>}
        </div>
        <div className={inputLastNameClasses}>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameInputHasError && <p className='error-text'>Last Name must not be empty.</p>}
        </div>
      </div>
      <div className={inputEmailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailInputHasError && <p className='error-text'>Please enter a valid email.</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
