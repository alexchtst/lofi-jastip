import { BanknoteArrowDown, House, MessageCircleMore, Route, Settings, Store } from "lucide-react";
import { DrawerKindEnum } from "../context-provider/drawer-context-provider";
import { ModalKindEnum } from "../context-provider/modal-context-provider";
import DrawerWrapper from "./drawer/drawer-wrapper";
import TestTemplateDrawer from "./drawer/test-template-drawer";
import ModalWrapper from "./modal/modal-wrapper";
import TestTemplateModal from "./modal/test-template-modal";
import NotifWrapper from "./notification/notif-wrapper";
import { useNavigate } from "react-router-dom";
import ProgressDrawer from "./drawer/progress-drawer";
import ProjectModal from "./modal/project-modal";

export default function MainLayout(
    { children, needProtection = false, isCourier = false }:
        { children: React.ReactNode, needProtection?: boolean, isCourier?: boolean }
) {

    console.log(needProtection, isCourier);
    const usenavigate = useNavigate()

    return (
        <div className='w-screen min-h-screen'>
            <div className="p-4 bg-blue-50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Store />
                    <p>Lcok Chart</p>
                </div>
                <MessageCircleMore />
            </div>
            <div>
                {children}
            </div>

            <div className="w-full p-4 bg-gray-200 fixed bottom-0 flex justify-between">
                <div className="flex flex-col gap-1 items-center" onClick={() => usenavigate('/courier/dashboard')}>
                    <House className="w-5 h-5" />
                    <p className="text-[10px]">Home</p>
                </div>
                <div className="flex flex-col gap-1 items-center" onClick={() => usenavigate('/courier/progress')}>
                    <Route className="w-5 h-5" />
                    <p className="text-[10px]">Progress</p>
                </div>
                <div className="flex flex-col gap-1 items-center" onClick={() => usenavigate('/courier/payment')}>
                    <BanknoteArrowDown className="w-5 h-5" />
                    <p className="text-[10px]">Pembayaran</p>
                </div>
                <div className="flex flex-col gap-1 items-center" onClick={() => usenavigate('/courier/profile')}>
                    <Settings className="w-5 h-5" />
                    <p className="text-[10px]">Profile</p>
                </div>
            </div>

            <NotifWrapper />

            <ModalWrapper
                listcontent={[
                    { name: ModalKindEnum.testtemplate, component: <TestTemplateModal /> },
                    { name: ModalKindEnum.projectprogress, component: <ProjectModal /> },
                ]}
            />

            <DrawerWrapper
                listcontent={[
                    { name: DrawerKindEnum.testtemplate, component: <TestTemplateDrawer /> },
                    { name: DrawerKindEnum.progress, component: <ProgressDrawer /> },
                ]}
            />
        </div>
    );
}
