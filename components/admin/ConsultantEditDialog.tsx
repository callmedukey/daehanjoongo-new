"use client";

import { updateConsultant } from "@/actions/consultants";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { consultantSchema } from "@/description/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { type Consultant } from "@prisma/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "../ui/checkbox";
const ConsultantEditDialog = ({ consultant }: { consultant: Consultant }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof consultantSchema>>({
    resolver: zodResolver(consultantSchema),
    defaultValues: {
      name: consultant.name,
      phoneNumber: consultant.phoneNumber,
      active: consultant.active,
    },
  });

  const onSubmit = async (data: z.infer<typeof consultantSchema>) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const { success } = await updateConsultant({
      consultantId: consultant.id,
      data,
    });

    if (success) {
      alert("상담원이 수정되었습니다.");
      setIsOpen(false);
    } else {
      alert("상담원 수정에 실패했습니다.");
    }
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>상담원 수정</DialogTitle>
          <DialogDescription>
            수정할 상담원의 정보를 입력해주세요.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="tracking-normal space-y-2 w-full max-w-md mx-auto"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>이름</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>전화번호</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, "");
                        if (value.length > 3 && value.length <= 7) {
                          value = `${value.slice(0, 3)}-${value.slice(3)}`;
                        } else if (value.length > 7) {
                          value = `${value.slice(0, 3)}-${value.slice(
                            3,
                            7
                          )}-${value.slice(7, 11)}`;
                        }
                        field.onChange(value.slice(0, 13));
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="active"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>활성화</FormLabel>
                  </div>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              수정
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultantEditDialog;
