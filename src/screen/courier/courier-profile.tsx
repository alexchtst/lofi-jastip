import MainLayout from "../../component/main-layout";

export default function CourierProfile() {
  return (
    <MainLayout needProtection={true} isCourier={true}>
      <div>
        CourierProfile
      </div>
    </MainLayout>
  );
}
