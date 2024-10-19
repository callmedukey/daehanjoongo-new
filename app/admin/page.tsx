import { verifySession } from "@/actions/session";
import { redirect } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import prisma from "@/lib/prisma";
import LogoutButton from "@/components/auth/LogoutButton";
import InquiryTable from "@/components/admin/InquiryTable";
import ConsultantTable from "@/components/admin/ConsultantTable";
import AdminPasswordForm from "@/components/admin/AdminPasswordForm";
import NextConsultantDialog from "@/components/admin/NextConsultantDialog";

export const dynamic = "force-dynamic";

const AdminPage = async () => {
  const session = await verifySession();
  if (!session?.isAuth) {
    redirect("/login");
  }

  const nextConsultant = (global as any)?.nextConsultant;

  if (!nextConsultant) {
    const consultants = await prisma.consultant.findMany({
      where: {
        active: true,
      },
      orderBy: {
        id: "asc",
      },
    });
    (global as any).nextConsultant = consultants[0].id || 1;
  }

  const inquiries = await prisma.consultation.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  const consultants = await prisma.consultant.findMany({
    orderBy: {
      id: "asc",
    },
  });

  if (!inquiries || !consultants) return <div>오류가 발생했습니다.</div>;

  return (
    <main className="min-h-screen py-12 px-4 tracking-normal font-sans">
      <div className="flex items-center justify-center mb-6 max-w-md mx-auto gap-6">
        <p className="flex items-center gap-2 justify-center">
          다음 상담원 ID: {nextConsultant || 1}
        </p>
        <NextConsultantDialog nextConsultant={nextConsultant || 1} />
      </div>
      <section className="max-w-screen-8xl mx-auto w-full flex items-center justify-center">
        <Tabs defaultValue="inquiry" className="w-full mx-auto min-h-screen">
          <TabsList className="w-full">
            <TabsTrigger value="inquiry" className="w-1/3">
              문의 내역
            </TabsTrigger>
            <TabsTrigger value="consultants" className="w-1/3">
              상담사 관리
            </TabsTrigger>
            <TabsTrigger value="settings" className="w-1/3">
              설정
            </TabsTrigger>
          </TabsList>
          <TabsContent value="inquiry">
            <InquiryTable inquiries={inquiries} consultants={consultants} />
          </TabsContent>
          <TabsContent value="consultants">
            <ConsultantTable consultants={consultants} />
          </TabsContent>
          <TabsContent value="settings">
            <div className="flex justify-center items-center py-24">
              <AdminPasswordForm />
            </div>
          </TabsContent>
        </Tabs>
      </section>
      <LogoutButton />
    </main>
  );
};

export default AdminPage;
