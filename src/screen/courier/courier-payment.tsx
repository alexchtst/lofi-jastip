import { Hourglass, Wallet } from "lucide-react";
import MainLayout from "../../component/main-layout";

export default function CourierPayment() {
  return (
    <MainLayout needProtection={true} isCourier={true}>
      <div className="w-full pb-32">
        <div className="px-5 py-5 flex flex-col gap-4">
          <h1 className="text-xl">Pending Payment</h1>
          <div className="flex justify-between items-center p-5 rounded-md border border-gray-300">
            <div className="flex items-center gap-3">
              <Hourglass />
              <p className="text-sm">Tempor tempor esse nisi.</p>
            </div>
            <p className="text-sm text-gray-600">10/25</p>
          </div>
          <div className="flex justify-between items-center p-5 rounded-md border border-gray-300">
            <div className="flex items-center gap-3">
              <Hourglass />
              <p className="text-sm">Tempor tempor esse nisi.</p>
            </div>
            <p className="text-sm text-gray-600">20/25</p>
          </div>
          <div className="flex justify-between items-center p-5 rounded-md border border-gray-300">
            <div className="flex items-center gap-3">
              <Hourglass />
              <p className="text-sm">Tempor tempor esse nisi.</p>
            </div>
            <p className="text-sm text-gray-600">10/25</p>
          </div>
        </div>
        <div className="px-5 py-5 flex flex-col gap-4">
          <h1 className="text-xl">Claim Payment</h1>
          <div className="flex justify-between items-center p-5 rounded-md border border-gray-300">
            <div className="flex items-center gap-3">
              <Wallet />
              <p className="text-sm">Tempor tempor esse nisi.</p>
            </div>
            <p className="text-sm text-gray-600">claim</p>
          </div>
          <div className="flex justify-between items-center p-5 rounded-md border border-gray-300">
            <div className="flex items-center gap-3">
              <Wallet />
              <p className="text-sm">Tempor tempor esse nisi.</p>
            </div>
            <p className="text-sm text-gray-600">caim</p>
          </div>
          <div className="flex justify-between items-center p-5 rounded-md border border-gray-300">
            <div className="flex items-center gap-3">
              <Wallet />
              <p className="text-sm">Tempor tempor esse nisi.</p>
            </div>
            <p className="text-sm text-gray-600">claim</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
