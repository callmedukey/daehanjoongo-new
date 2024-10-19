"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Consultant } from "@prisma/client";
import { useState } from "react";
import { ConsultationWithConsultant } from "./InquiryTable";
import { cn } from "@/lib/utils";
import { selectConsultant } from "@/actions/inquiry";

const InquirySelectionDialog = ({
  consultants,
  inquiry,
}: {
  consultants: Consultant[];
  inquiry: ConsultationWithConsultant;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSelectConsultant = async (consultantId: number) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    const { success } = await selectConsultant({
      inquiryId: inquiry.id,
      consultantId,
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
            활성화된 상담원만 선택이 가능합니다.
          </DialogDescription>
        </DialogHeader>
        <ul
          className="flex flex-col gap-2
    "
        >
          {consultants.map((consultant) => (
            <li
              key={consultant.id}
              className={cn(
                inquiry?.consultantId === consultant.id && "bg-black/30",
                "rounded-md"
              )}
            >
              <Button
                onClick={() => handleSelectConsultant(consultant.id)}
                disabled={isLoading}
                variant="ghost"
                className={cn(
                  "w-full",
                  inquiry?.consultantId === consultant.id && "font-bold"
                )}
              >
                {consultant.id} {consultant.name} {consultant.phoneNumber}
              </Button>
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
};

export default InquirySelectionDialog;
