import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";
import { BsFillSendFill, BsTelephoneOutbound } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="mt-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="font-black text-tertiary-dark">
          Hotelzz
        </Link>

        <h4 className="font-semibold text-[40px] py-6">Liên hệ</h4>

        <div className="flex flex-wrap gap-16 items-center justify-between">
          <div className="flex-1">
            <p>123 Road</p>
            <div className="flex items-center py-4">
              <BsFillSendFill />
              <p className="ml-2">TienDepv</p>
            </div>
            <div className="flex items-center">
              <BsTelephoneOutbound />
              <p className="ml-2">000-000-00</p>
            </div>
            <div className="flex items-center pt-4">
              <BiMessageDetail />
              <p className="ml-2">TienDepv</p>
            </div>
          </div>

          <div className="flex-1 md:text-right">
            <p className="pb-4">Về chúng tôi</p>
            <p className="pb-4">Liên hệ</p>
            <p className="pb-4">Cam kết bảo mật</p>
            <p className="pb-4">Điều khoản dịch vụ</p>
            <p>Hỗ trợ</p>
          </div>

          <div className="flex-1 md:text-right">
            <p className="pb-4">Trải nghiệm ăn uống</p>
            <p className="pb-4">Spa</p>
            <p className="pb-4">Không gian</p>
            <p className="pb-4">Thể thao</p>
            <p>Sự kiện</p>
          </div>
        </div>
      </div>

      <div className="bg-tertiary-light h-10 md:h-[70px] mt-16 w-full bottom-0 left-0" />
    </footer>
  );
}
