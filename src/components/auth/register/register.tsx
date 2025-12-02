import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { RegisterForm } from "./registerForm";

export const RegisterPage = () => {
  return (
    <div className="flex w-screen min-h-screen justify-center items-center">
      <Card className="w-[300px] md:w-[400px]">
        <CardHeader>
          <CardTitle className="text-[#dc354b] tex-xl md:text-2xl  font-semibold">
            Creat your account
          </CardTitle>
          <CardDescription>Enter your basic information below</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Register form component */}
          <RegisterForm />

          <div className=" text-center ">
            <span className="text-slate-700 font-semibold">Or</span>
          </div>

          {/* Need to create one component */}
          <Button variant={"outline"} className="w-full">
            <img src="google-logo.png" className="size-4" />
            Register with Google
          </Button>

          <div>
            <p className="text-center">
              Already have account?{" "}
              <a href="/login" className="text-[#dc354b] font-bold">
                {" "}
                Login
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
