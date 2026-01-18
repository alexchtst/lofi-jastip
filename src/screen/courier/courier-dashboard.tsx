import { CircleCheck, CircleX, History } from "lucide-react";
import MainLayout from "../../component/main-layout";
import DashboardCccordion from "../../component/courier/dashboard-accordion";
import { useNavigate } from "react-router-dom";

export default function CourierDashboard() {
  const usenavigate = useNavigate()

  return (
    <MainLayout needProtection={true} isCourier={true}>
      <div className="w-full pb-32">
        {/* profile summary */}
        <div className="overflow-x-scroll px-7 py-4 bg-gray-50">
          <div className="w-fit flex items-center gap-5">
            <div className="w-[80vw] aspect-video bg-gray-300 rounded-md p-3 flex flex-col justify-between">
              <div onClick={() => usenavigate('/courier/profile')}>NAMA LENGKAP DISINI</div>
              <div className="w-full flex items-end justify-between">
                <p>NO COURIER</p>
                <p>RATING</p>
              </div>
            </div>
            <div className="w-[80vw] aspect-video bg-gray-300 rounded-md p-3 flex flex-col justify-between">
              <div onClick={() => usenavigate('/courier/profile')}>NAMA LENGKAP DISINI</div>
              <div className="w-full flex items-end justify-between">
                <p>NO COURIER</p>
                <p>RATING</p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-5 flex flex-col gap-5">

          <div className="flex flex-col gap-5">
            <div className="text-xl font-semibold" onClick={() => usenavigate('/courier/dashboard')}>Sunt eiusmod non ipsum.</div>
            <div className="w-full grid grid-cols-3 gap-2">
              <div className="w-full aspect-square bg-gray-300 rounded-md" />
              <div className="w-full aspect-square bg-gray-300 rounded-md" />
              <div className="w-full aspect-square bg-gray-300 rounded-md" />
              <div className="w-full aspect-square bg-gray-300 rounded-md" />
              <div className="w-full aspect-square bg-gray-300 rounded-md" />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="text-xl font-semibold" onClick={() => usenavigate('/courier/payment')}>Sunt eiusmod non ipsum.</div>
            <div className="w-full flex flex-col gap-4">
              <div className="flex justify-between items-center p-5 rounded-md border border-gray-300 shadow-[5px_5px_8px_3px_rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-3">
                  <History className="text-yellow-300" />
                  <p className="text-sm">Tempor tempor esse nisi.</p>
                </div>
                <p className="text-sm text-gray-600">10/26</p>
              </div>

              <div className="flex justify-between items-center p-5 rounded-md border border-gray-300 shadow-[5px_5px_8px_3px_rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-3">
                  <CircleX className="text-red-400" />
                  <p className="text-sm">Tempor tempor esse nisi.</p>
                </div>
                <p className="text-sm text-gray-600">10/26</p>
              </div>

              <div className="flex justify-between items-center p-5 rounded-md border border-gray-300 shadow-[5px_5px_8px_3px_rgba(0,0,0,0.1)]">
                <div className="flex items-center gap-3">
                  <CircleCheck className="text-green-400" />
                  <p className="text-sm">Tempor tempor esse nisi.</p>
                </div>
                <p className="text-sm text-gray-600">10/26</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="text-xl font-semibold" onClick={() => usenavigate('/courier/progress')}>Sunt eiusmod non ipsum.</div>
            <DashboardCccordion />
            <DashboardCccordion />
            <DashboardCccordion />
          </div>
        </div>

      </div>
    </MainLayout >
  );
}
