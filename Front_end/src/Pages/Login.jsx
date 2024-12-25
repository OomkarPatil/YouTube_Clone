"use client";

import CardWrapper from "@/components/auth/CardWrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Login = () => {

  const FormSchema = z.object({
    email: z.string().min(2, {
      message: "Please valid email address.",
    }),
    password: z.string().min(6, {
      message: "password must be at least 6 characters.",
    }),
  });

  const InputForm = () => {
    const form = useForm({
      resolver: zodResolver(FormSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    });

    const onSubmit = (data) => {
      // Store the data in a variable and log to console
      const formData = data;
      console.log("Submitted Data:", formData);
    };

    return (
      <section className="bg-[#141414] w-full">
        <div className="h-screen flex justify-center items-center">
          <CardWrapper
            label="Login to your Account"
            title="Login"
            backButtonHref="/Register"
            backButtonlabel="Don't have an account? Register here."
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="jhonedoe@gmail.com" {...field} />
                      </FormControl>
                    </FormItem> 
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>password</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="* * * * * * *" {...field} />
                      </FormControl>
                    </FormItem> 
                  )}
                />
                <Button type="submit" className="w-full bg-[#FF0000]">Submit</Button>
              </form>
            </Form>
          </CardWrapper>
        </div>
      </section>
    );
  };

  return <InputForm />;
};

export default Login;
