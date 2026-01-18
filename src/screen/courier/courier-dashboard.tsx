import MainLayout from "../../component/main-layout";

export default function CourierDashboard() {
  return (
    <MainLayout needProtection={true} isCourier={true}>
      <div className="h-[200vw]" >
        CourierDashboard
      </div>
    </MainLayout>
  );
}
