import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AgreementFirst = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="">
          <TableHead className="min-w-[100px] font-bold">구분</TableHead>
          <TableHead className="min-w-[100px] font-bold">필수항목</TableHead>
          <TableHead className="min-w-[100px] font-bold">선택항목</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>일반회원가입</TableCell>
          <TableCell>
            {`성명, 아이디, 비밀번호, 연락처(전화번호, 휴대전화번호), 이메일주소`}
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>딜러회원가입</TableCell>
          <TableCell>
            {`성명, 아이디, 비밀번호, 연락처(전화번호, 휴대전화번호), 이메일주소, 조합, 지역, 사원증번호, 단지명, 상사명, 상사전화번호, 상사주소`}
          </TableCell>
          <TableCell>상사팩스번호, 전문분야, 사진</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>구입문의</TableCell>
          <TableCell>
            {`차량정보(차량번호, 형식년도 등), 연락처(전화번호, 휴대전화번호), 비밀번호`}
          </TableCell>
          <TableCell>제목, 상세설명</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>판매문의</TableCell>
          <TableCell>{`차량명, 연락처(전화번호, 휴대전화번호)`}</TableCell>
          <TableCell></TableCell>
        </TableRow>
        <TableRow>
          <TableCell>후기작성</TableCell>
          <TableCell>
            {`차량명, 연락처(전화번호, 휴대전화번호), 비밀번호, 제목, 내용`}
          </TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default AgreementFirst;
