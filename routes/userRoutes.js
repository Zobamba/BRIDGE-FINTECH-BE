import UserController from "../controller/user-controller";
import { signUpConstraints, signInConstraints, validateFormData, verifyAuthToken, validateToken } from "../middlewares/auth-validate";

export default function userRoutes(app) {
  app.post('/sign_up', signUpConstraints, validateFormData, UserController.signUp);
  app.post('/sign_in', signInConstraints, validateFormData, UserController.signIn);
  app.put('/update-profile', verifyAuthToken, validateToken, validateFormData, UserController.UpdateProfile);
}