import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "@/http/api";
import { useMutation } from "@tanstack/react-query";
import { LoaderCircle } from "lucide-react";
import useTokenStore from "@/store";

const RegisterPage = () => {
  const navigate = useNavigate();
  const setToken = useTokenStore((state) => state.setToken);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const mutation = useMutation({
    mutationFn: register,
    onSuccess: (response) => {
      setToken(response.data.accessToken);
      navigate("/dashboard/home");
    },
  });

  const handleLoginSubmit = () => {
    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!name || !email || !password) {
      return alert("please enter email and password");
    }

    // mutation
    mutation.mutate({ name, email, password });
    //make sever call for login
  };

  return (
    <section className="flex items-center justify-center h-screen">
      <Card className="mx-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your information to create an account <br />
            {mutation.isError && (
              <span className="text-red-500 text-sm">
                Something went wrong.
              </span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">Name</Label>
              <Input ref={nameRef} id="first-name" placeholder="Max" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                ref={emailRef}
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input ref={passwordRef} id="password" type="password" />
            </div>
            <Button
              onClick={handleLoginSubmit}
              className="w-full flex gap-2"
              disabled={mutation.isPending}
            >
              {mutation.isPending && (
                <LoaderCircle className={"animate-spin"} strokeWidth={1.75} />
              )}

              <span>Register</span>
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default RegisterPage;
