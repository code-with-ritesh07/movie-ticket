import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { LogInForm } from "./LogInForm";

export const LoginPage = () => {
  return (
    <div className="flex w-screen min-h-screen justify-center items-center">
      <Card className="w-[300px] md:w-[400px]">
        <CardHeader>
          <CardTitle className="text-[#dc354b] tex-xl md:text-2xl  font-semibold">
            Login to your account
          </CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Log In form component */}
          <LogInForm />

          <div className=" text-center ">
            <span className="text-slate-700 font-semibold">Or</span>
          </div>

          {/* Need to create one component */}
          <Button variant={"outline"} className="w-full">
            <img src="google-logo.png" className="size-4" />
            Login with Google
          </Button>

          <div>
            <p className="text-center">
              Don't have account?{" "}
              <a href="/register" className="text-[#dc354b] font-bold">
                {" "}
                Register
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
