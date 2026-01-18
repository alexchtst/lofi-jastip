import { Flag, LandPlot, Plane } from "lucide-react";
import MainLayout from "../../component/main-layout";
import React from "react";
import { DrawerContext, DrawerKindEnum } from "../../context-provider/drawer-context-provider";
import { ModalContext, ModalKindEnum } from "../../context-provider/modal-context-provider";

export default function CourierProgress() {
  const { setDrawerKind } = React.useContext(DrawerContext);
  const { setModalKind } = React.useContext(ModalContext);

  return (
    <MainLayout needProtection={true} isCourier={true}>
      <div className="w-full pb-32">
        <div className="px-5 py-5 flex flex-col gap-4">
          <h1 className="text-xl pb-8" >Proses Pengiriman</h1>
          <div className="border border-gray-300 p-3 rounded-md" onClick={() => setModalKind(ModalKindEnum.projectprogress)}>Project A</div>
          <div className="flex flex-col gap-2">
            <div className="grid grid-cols-2 text-sm">
              <div>
                <p>Destionation</p>
                <p>Deadline</p>
                <p>Progress</p>
              </div>
              <div>
                <p>Destionation</p>
                <p>Deadline</p>
                <p>Progress</p>
              </div>
            </div>
            <p className="text-justify text-[12px]">
              Consequat adipisicing cupidatat et consectetur fugiat cupidatat.
              Id qui aute ut duis nostrud fugiat. Tempor ut nisi anim deserunt duis deserunt.
              Commodo qui nisi eu occaecat cupidatat.
              Eiusmod eiusmod magna deserunt pariatur ut in Lorem Lorem Lorem enim.
            </p>
            <button className="text-center text-white w-full p-2 rounded-md bg-blue-500">Check Point</button>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-xl">Progress</h2>
            <div className="grid grid-cols-3 gap-5">
              <div className="bg-white border border-gray-300 rounded-md w-full aspect-square flex flex-col justify-center items-center gap-3" onClick={() => setDrawerKind(DrawerKindEnum.progress)} >
                <LandPlot className="w-full" />
                <p className="text-[10px]">Leaving Country</p>
              </div>
              <div className="bg-white border border-gray-300 rounded-md w-full aspect-square flex flex-col justify-center items-center gap-3" onClick={() => setDrawerKind(DrawerKindEnum.progress)} >
                <Plane className="w-full" />
                <p className="text-[10px]">On The Way</p>
              </div>
              <div className="bg-white border border-gray-300 rounded-md w-full aspect-square flex flex-col justify-center items-center gap-3" onClick={() => setDrawerKind(DrawerKindEnum.progress)} >
                <Flag className="w-full" />
                <p className="text-[10px]">Done</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
