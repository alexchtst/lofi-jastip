import { DrawerKindEnum } from "../context-provider/drawer-context-provider";
import { ModalKindEnum } from "../context-provider/modal-context-provider";
import DrawerWrapper from "./drawer/drawer-wrapper";
import TestTemplateDrawer from "./drawer/test-template-drawer";
import ModalWrapper from "./modal/modal-wrapper";
import TestTemplateModal from "./modal/test-template-modal";
import NotifWrapper from "./notification/notif-wrapper";

export default function MainLayout(
    { children, needProtection = false, isCourier = false }:
        { children: React.ReactNode, needProtection?: boolean, isCourier?: boolean }
) {

    console.log(needProtection, isCourier)

    return (
        <div className='w-screen min-h-screen'>
            <div>
                {children}
            </div>

            <div className="w-full p-4 h-10 bg-red-500 fixed bottom-0">
                <div></div>
            </div>

            <NotifWrapper />

            <ModalWrapper
                listcontent={[
                    { name: ModalKindEnum.testtemplate, component: <TestTemplateModal /> }
                ]}
            />

            <DrawerWrapper
                listcontent={[
                    { name: DrawerKindEnum.testtemplate, component: <TestTemplateDrawer /> }
                ]}
            />
        </div>
    );
}
