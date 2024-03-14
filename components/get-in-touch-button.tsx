"use client";

import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email(),
  message: z.string().min(1, "Message is required"),
});

const GetInTouch = ({
  size,
  className,
}: {
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={size} className={className}>
          Get in touch
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gradient-to-br from-[#5C5C61]/50 from-50% backdrop-blur-sm border-none shadow-lg">
        <DialogHeader>
          <DialogTitle>Get in touch</DialogTitle>
          <DialogDescription className="text-white">
            I'm always looking for new opportunities and people to work with.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full name:</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-transparent" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email:</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-transparent" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message:</FormLabel>
                  <FormControl>
                    <Textarea {...field} className="bg-transparent" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter>
          <Button onClick={form.handleSubmit(onSubmit)}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GetInTouch;
