import { useContext, useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const [formsFields, setFormFields] = useState(defaultFormFields);
  const { password, email } = formsFields;
  const { setCurrentUser } = useContext(UserContext); /** State management */

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const user = await signAuthUserWithEmailAndPassword(email, password);
      setCurrentUser(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong Password for email");

          break;
        case "auth/user-not-found":
          alert("No User associated with email");

          break;
        default:
          console.log(error);
      }
      console.log(error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formsFields, [name]: value });
  };
  return (
    <div className="sign-in-container">
      <h1>Already have an account!</h1>
      <h2>Sign In with your email and password</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
