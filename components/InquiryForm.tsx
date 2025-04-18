"use client";
import Image from "next/image";
import { Input } from "./ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import formSchema from "@/description/zod";
import { submitInquiry } from "@/actions/submit";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { triggerEvent } from "@/lib/triggerEvent";

const InquiryForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      car: "",
      phone: "010",
      agreement: true,
    },
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    if (!data.agreement) {
      return alert("개인 정보 수집/이용 동의를 해야 합니다.");
    }
    const result = await submitInquiry(data);

    if (result.message) {
      triggerEvent();
      alert(result.message);
      form.reset();
      setIsLoading(false);
    }
  };

  const test = () => {
    triggerEvent();
  };

  return (
    <Form {...form}>
      <form
        id="inquiry-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className="mb-12 mt-3 space-y-8 xl:px-12 scroll-my-60 text-primaryFormText border-[#FFE5E5]"
      >
        <FormField
          control={form.control}
          name="car"
          render={({ field }) => (
            <FormItem className="flex items-center relative">
              <Image
                src="/img/car.png"
                alt="차량"
                width={72}
                height={72}
                className="absolute"
              />
              <label
                htmlFor={field.name}
                ref={field.ref}
                className={cn(
                  "absolute left-20 top-1 text-24 flex flex-col gap-2",
                  field.value && "sr-only"
                )}
              >
                <span>차량명</span>
                <span className="text-primary">ex) K5</span>
              </label>
              <FormControl>
                <Input
                  className="!mt-0 h-20 rounded-none bg-inputBg pl-20 placeholder:invisible"
                  placeholder="ex) K5"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex items-center gap-8">
              <FormLabel className="h-full font-medium !twenty min-w-[3rem] sr-only">
                연락처
              </FormLabel>
              <FormControl>
                <Input
                  className="!mt-0 h-20 rounded-none bg-inputBg pl-6"
                  placeholder="010"
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
          name="agreement"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <FormControl>
                  <Checkbox
                    className="size-6 rounded-full border-black"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel className="text-base font-bold">
                  개인정보 수집/이용 동의
                </FormLabel>
              </div>
              <Link
                href="/terms"
                target="_blank"
                className="font-notoSans font-normal text-footerColor py-0 !my-0"
              >
                {`
                [내용보기]
                  `}
              </Link>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={isLoading}
          className="sm:twenty font-notoSans font-normal text-sm flex items-center mx-auto py-3 xl:pr-8 h-full leading-relaxed xl:leading-none flex-wrap relative hover:-translate-y-2 transition-all duration-300 gap-2 blinking-element"
        >
          <Image
            src="/img/car_icon.png"
            alt="클릭"
            width={36}
            height={36}
            className="float-left"
          />
          <span>30초만에 내차 최고가 시세 조회 Click</span>
        </Button>
      </form>
    </Form>
  );
};

export default InquiryForm;
