"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { Consultant, Consultation } from "@prisma/client";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { useState } from "react";
import ConsultantEditDialog from "./ConsultantEditDialog";
import AddConsultantDialog from "./AddConsultantDialog";
import { deleteConsultant } from "@/actions/consultants";

export interface ConsultationWithConsultant extends Consultation {
  consultant?: Consultant | null;
}

const ConsultantTable = ({ consultants }: { consultants: Consultant[] }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async (id: number) => {
    if (isLoading) {
      return;
    }
    if (!confirm("정말로 삭제하시겠습니까?")) {
      return;
    }
    setIsLoading(true);
    const { success } = await deleteConsultant(id);
    if (success) {
      alert("상담원이 삭제되었습니다.");
    } else {
      alert("상담원 삭제에 실패했습니다.");
    }
    setIsLoading(false);
  };
  return (
    <>
      <div className="flex py-4 justify-end">
        <AddConsultantDialog />
      </div>
      <Table>
        <TableHeader>
          <TableRow className="">
            <TableHead className="min-w-[100px] font-bold">등록일자</TableHead>
            <TableHead className="min-w-[100px] font-bold">ID</TableHead>
            <TableHead className="min-w-[100px] font-bold">이름</TableHead>
            <TableHead className="min-w-[100px] font-bold">연락처</TableHead>
            <TableHead className="min-w-[100px] font-bold">상태</TableHead>
            <TableHead className="min-w-[50px]"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {consultants.map((consultant) => (
            <TableRow key={consultant.id}>
              <TableCell>
                {format(consultant?.createdAt, "yyyy-MM-dd HH:mm")}
              </TableCell>
              <TableCell>{consultant?.id}</TableCell>
              <TableCell>{consultant?.name}</TableCell>
              <TableCell>{consultant?.phoneNumber}</TableCell>
              <TableCell>{consultant?.active ? "활성" : "비활성"}</TableCell>
              <TableCell className="">
                <ConsultantEditDialog consultant={consultant} />
                <Button
                  disabled={isLoading}
                  type="button"
                  onClick={() => handleDelete(consultant.id)}
                  variant="ghost"
                  className="m-0"
                >
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
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default ConsultantTable;
