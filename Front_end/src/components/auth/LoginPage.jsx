"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import CardWrapper from "./CardWrapper";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../ui/form";
import { LoginSchema } from "/Schema/index.js";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const LoginPage = () => {
  // Initialize the form with validation schema
  const form = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Submitted data:", data);
  };

  return (
    <section className="w-full">
      <div className="h-screen flex justify-center items-center">
        <CardWrapper
          label="Login to your Account"
          title="Login"
          backButtonHref="/register"
          backButtonlabel="Don't have an account? Register here."
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="jhonedoe@email.com"
                        />
                      </FormControl>
                      <FormMessage>{form.formState.errors.email?.message}</FormMessage>
                    </FormItem>
                  )}
                /><FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="jhonedoe@email.com"
                      />
                    </FormControl>
                    <FormMessage>{form.formState.errors.name?.message}</FormMessage>
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
                        <Input
                          {...field}
                          type="password"
                          placeholder="******"
                        />
                      </FormControl>
                      <FormMessage>{form.formState.errors.password?.message}</FormMessage>
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full bg-[#FF0000]">
                Login
              </Button>
            </form>
          </Form>
        </CardWrapper>
      </div>
    </section>
  );
};

export default LoginPage;
