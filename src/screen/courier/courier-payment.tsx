import MainLayout from "../../component/main-layout";

export default function CourierPayment() {
  return (
    <MainLayout needProtection={true} isCourier={true}>
      <div>
        CourierPayment
      </div>
    </MainLayout>
  );
}
