"use client";

import { addConsultant, changeNextConsultant } from "@/actions/consultants";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { nextConsultantSchema } from "@/description/zod";
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
import { useRouter } from "next/navigation";
const NextConsultantDialog = ({
  nextConsultant,
}: {
  nextConsultant: number;
}) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof nextConsultantSchema>>({
    resolver: zodResolver(nextConsultantSchema),
    defaultValues: {
      id: nextConsultant,
    },
  });

  const onSubmit = async (data: z.infer<typeof nextConsultantSchema>) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const { success, error } = await changeNextConsultant(data.id);

    if (success) {
      alert("상담원이 변경되었습니다.");
      setIsOpen(false);
      router.refresh();
    } else {
      alert(error);
    }
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">다음 상담원 변경</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>상담원 변경</DialogTitle>
          <DialogDescription>상담원의 정보를 입력해주세요.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="tracking-normal space-y-2 w-full max-w-md mx-auto"
          >
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>상담원 ID</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
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

export default NextConsultantDialog;
