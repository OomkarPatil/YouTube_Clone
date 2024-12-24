"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import CardWrapper from "./CardWrapper";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import { RegisterSchema } from "/Schema/index.js";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

const RegisterPage = () => {
  const form = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <section className="w-full">
      <div className="h-screen flex justify-center items-center">
        <CardWrapper
          label="Create an Account"
          title="Register"
          backButtonHref="/login"
          backButtonlabel="Already have an account? Login here."
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} type="email" placeholder="johndoe@email.com" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="John Doe" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                </div>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} type="password" placeholder="******" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
          
              </div>
              <div className="flex justify-center items-center w-full gap-8">
                  <div>
                    <Label htmlFor="picture">Profile Image</Label>
                    <Input id="picture" type="file" accept="image/*" />
                  </div>
                  <img 
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
                      alt="logo" 
                      className="w-1/4 mr-2 rounded-full"
                   />
              </div>
              <Button type="submit" className="w-full bg-[#FF0000]">
                Register
              </Button>
            </form>
          </Form>
        </CardWrapper>
      </div>
    </section>
  );
};

export default RegisterPage;
