import MainLayout from "../../component/main-layout";

export default function CourierPayment() {
  return (
    <MainLayout needProtection={true} isCourier={true}>
      <div className="w-full pb-32">
        <div className="px-5 py-5 flex flex-col gap-4">
          <h1 className="text-xl pb-8" >Payment</h1>
          CourierPayment
        </div>
      </div>
    </MainLayout>
  );
}
