import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AgreementSecond = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="">
          <TableHead className="min-w-[100px] font-bold">
            보관하는 정보
          </TableHead>
          <TableHead className="min-w-[100px] font-bold">보존 이유</TableHead>
          <TableHead className="min-w-[100px] font-bold">보존 기간</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>소비자의 불만 또는 분쟁처리에 관한 기록</TableCell>
          <TableCell>전자상거래 등에서의 소비자보호에 관한 법률</TableCell>
          <TableCell>3년</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>본인확인에 관한 기록</TableCell>
          <TableCell>
            {`정보통신 이용촉진 및 정보보호 등에 관한 법률`}
          </TableCell>
          <TableCell>6개월</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>방문에 관한 기록</TableCell>
          <TableCell>{`통신비밀보호법`}</TableCell>
          <TableCell>3개월</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default AgreementSecond;
