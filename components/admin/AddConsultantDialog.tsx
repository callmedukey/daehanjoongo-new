"use client";

import { addConsultant } from "@/actions/consultants";
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

const AddConsultantDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof consultantSchema>>({
    resolver: zodResolver(consultantSchema),
    defaultValues: {
      name: "",
      phoneNumber: "",
      active: true,
    },
  });

  const onSubmit = async (data: z.infer<typeof consultantSchema>) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const { success } = await addConsultant(data);

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
      <DialogTrigger asChild>
        <Button>상담원 추가</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>상담원 추가</DialogTitle>
          <DialogDescription>상담원의 정보를 입력해주세요.</DialogDescription>
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

export default AddConsultantDialog;
