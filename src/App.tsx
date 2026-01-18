import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CourierDashboard from "./screen/courier/courier-dashboard";
import Login from "./screen/login";
import Chat from "./screen/chat";
import CourierProfile from "./screen/courier/courier-profile";
import CourierPayment from "./screen/courier/courier-payment";
import CourierProgress from "./screen/courier/courier-progress";
import CustomerDashboard from "./screen/customer/customer-dashboard";
import CustomerProfile from "./screen/customer/customer-profile";
import CustomerPayment from "./screen/customer/customer-payment";
import CustomerProgress from "./screen/customer/customer-progress";
import NotificationProvider from "./context-provider/notification-context-provider";
import ModalProvider from "./context-provider/modal-context-provider";
import DrawerProvider from "./context-provider/drawer-context-provider";

export default function App() {
  return (
    <NotificationProvider>
      <ModalProvider>
        <DrawerProvider>
          <Router>
            <Routes>

              <Route path="/" element={<Login />} index />
              <Route path="/chat" element={<Chat />} />

              <Route path="/courier/dashboard" element={<CourierDashboard />} />
              <Route path="/courier/profile" element={<CourierProfile />} />
              <Route path="/courier/payment" element={<CourierPayment />} />
              <Route path="/courier/progress" element={<CourierProgress />} />

              <Route path="/customer/dashboard" element={<CustomerDashboard />} />
              <Route path="/customer/profile" element={<CustomerProfile />} />
              <Route path="/customer/payment" element={<CustomerPayment />} />
              <Route path="/customer/progress" element={<CustomerProgress />} />

            </Routes>
          </Router>
        </DrawerProvider>
      </ModalProvider>
    </NotificationProvider>
  );
}
