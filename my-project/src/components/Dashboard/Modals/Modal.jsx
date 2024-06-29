import { FaTimes } from "react-icons/fa";
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";
import ChangePin from "./ChangePin";
import Complain from "./Complain";
import Logout from "./Logout";
import PaymentSummary from "../PaymentSummaryAirtime";
import PaymentConfirmationPin from "./PaymentConfirmationPin";
import EmailVerification from "./EmailVerification";
import BankConfirmationPin from "./BankConfirmationPin";
import PaymentDeliveryMessage from "./PaymentDeliveryMessage";

export const Modal = ({ show, onClose, formType }) => {
  if (!show) return null;

  const renderForm = () => {
    switch (formType) {
      case "Email Verification":
        return <EmailVerification />;
      case "Personal Information":
        return <Profile />;
      case "Change Password":
        return <ChangePassword />;
      case "Change Pin":
        return <ChangePin />;

      case "Complain":
        return <Complain />;
      case "Logout of Waradata":
        return <Logout onClose={onClose} />;

      case "Bank Confirmation":
        return <BankConfirmationPin onClose={onClose} />;

      case "Payment Confirmation":
        return <PaymentConfirmationPin />;

      case "Delivery Message":
        return <PaymentDeliveryMessage onClose={onClose} />;
      default:
        return null;
    }
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      //  onClick={onClose}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-6 right-4">
          <FaTimes className="text-gray-500 hover:text-gray-700 focus:outline-none  text-3xl" />
        </button>
        <h2 className="text-xl font-bold b-12 pb-4">{formType}</h2>
        {renderForm()}
      </div>
    </div>
  );
};
