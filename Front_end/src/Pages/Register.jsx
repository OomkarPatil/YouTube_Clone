"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import CardWrapper from "@/components/auth/CardWrapper";
import { Form,FormField,
  FormItem,
  FormLabel,
  FormControl,} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { z } from "zod";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {

  const FormSchema = z.object({
      email: z.string().email("Please valid email address."),
      name: z.string().min(2, {
        message: "Please enter your name.",
      }),
      password: z.string().min(6, {
        message: "password must be at least 6 characters.",
      }),
      profilepic: z.string().min(1, {
        message: "Please upload a profile picture.",
      }),
    });

    

    
  
    const InputForm = () => {

      
      const [imageUrl, setImageUrl] = useState("");
      
      const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
          email: "",
          name: "",
          password: "",
          profilepic: "",
        },
      });

      
               

      const UploadImg = async (e) => {

        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'Youtube-Clone');
        try {
            // cloudName="dzbnjm4eg";
            const res = await axios.post('https://api.cloudinary.com/v1_1/dzbnjm4eg/image/upload', data);
            const imgUrl = res.data.url;
            form.setValue('profilepic', imgUrl);   // Update form state with image url
            setImageUrl(imgUrl);

            // Storing the image URL in localStorage
           localStorage.setItem('profileImage', imgUrl);
           localStorage.setItem('profilename', data.name);
        } catch (err) {
            console.error(err);
        }
        
      }

        // Handle form submission
      const onSubmit = (data) => {
         console.log("Submitted data:", data);
      };

  
    return (
    <section className="w-full bg-[#141414]">
      <div className="h-screen mx-8 flex justify-center items-center">
        <CardWrapper
          label="Register to your Account"
          title="Register"
          backButtonHref="/login"
          backButtonlabel="Don't have an account? Register here."
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="jhonedoe@email.com"
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>name</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="jhon Doe"
                        {...field} 
                      />
                    </FormControl>
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
                          type="password"
                          placeholder="* * * * * *"
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-center items-center w-full gap-8">
                    <div>
                    <FormField
                      control={form.control}
                      name="profilepic"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Profile Image</FormLabel>
                          <FormControl>
                            <Input
                              onChange={(e)=>{UploadImg(e);field.onChange(e)}}
                              type="file"
                              accept="image/*"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                     </div>
                        <img 
                          src={imageUrl}                          
                          className="w-[100px] h-[100px] mr-2 rounded-full border-2 flex justify-center items-center border-[#c7c2c2]"
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
    )
    };
    return <InputForm />;
};

export default LoginPage;
