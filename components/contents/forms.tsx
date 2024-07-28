"use client";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogFooter } from "@/components/ui/dialog";
import { db } from "@/lib/db";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { error } from "console";
interface FormProps {
  id: any;
  imageUrl: string;
  discription: string;
  name: string;
  status: boolean;
}

const Forms = () => {
  const onRedirect = () => {};
  const { register, handleSubmit } = useForm();
  // const form = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    console.log("Form data:", data);
    try {
      setIsLoading(true);
      const response = await fetch("/api/routes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("Response:", response);
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Failed to create pet.");
      }
      console.log("Form data saved successfully!");
    } catch (error) {
      console.error("Error saving form data :", error);
    } finally {
      setIsLoading(false);
      // redirect("/");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 px-6 pt-[100px]"
    >
      <div className="space-y-8">
        <div>
          <label htmlFor="name" className="block">
            Name
          </label>
          <input
            id="name"
            type="text"
            disabled={isLoading}
            {...register("name", { required: true })}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="imgUrl" className="block">
            imgUrl
          </label>
          <input
            id="imgUrl"
            type="text"
            disabled={isLoading}
            {...register("imgUrl")}
            placeholder="Enter img URL"
          />
        </div>
        <div>
          <label htmlFor="description" className="block">
            Description
          </label>
          <input
            id="description"
            type="text"
            disabled={isLoading}
            {...register("description")}
            placeholder="Enter description"
          />
        </div>
        <div>
          <label htmlFor="status" className="block">
            Channel Type
          </label>
          <select id="status" className=" capitalize " {...register("status")}>
            <option className="capitalize" value="public">
              available
            </option>
            <option className="capitalize" value="private">
              adopted
            </option>
          </select>
        </div>
      </div>
      <div className="bg-gray-100 px-6 py-4">
        <Button variant="ghost" type="submit" disabled={isLoading}>
          Upload
        </Button>
      </div>
    </form>
  );
};
export default Forms;
