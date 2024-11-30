import express from "express";
import { SignUpUseCase } from "../application/useCases/SignUpUseCase";
import { SignUpController } from "../application/controllers/SignUpController";
import { SignInUseCase } from "../application/useCases/SignInUseCase";
import { SignInController } from "../application/controllers/SignInController";

const app = express();

app.use(express.json());

app.post("/sign-up", async (request, response) => {
  const signUpUseCase = new SignUpUseCase();
  const signUpController = new SignUpController(signUpUseCase);

  const { statusCode, body } = await signUpController.handle({
    body: request.body,
  });

  response.status(statusCode).json(body);
});

app.post("/sign-in", async (request, response) => {
  const signInUseCase = new SignInUseCase();
  const signInController = new SignInController(signInUseCase);

  const { statusCode, body } = await signInController.handle({
    body: request.body,
  });

  response.status(statusCode).json(body);
});

app.listen(3001, () => {
  console.log("🚀 Server started at http://localhost:3001");
});
