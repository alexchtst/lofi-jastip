import { UserCircle } from "lucide-react";
import MainLayout from "../../component/main-layout";

export default function CourierProfile() {
  return (
    <MainLayout needProtection={true} isCourier={true}>
      <div className="w-full pb-32">
        <div className="p-5">
          <div className="w-full flex items-center gap-5 bg-blue-500 p-5 rounded-md">
            <div>
              <UserCircle className="w-10 h-10 text-white" />
            </div>
            <div className="text-white">
              <p>NAMA LENGKAP DISINI</p>
              <p>Courier/Customer</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
