import { FaTimes } from "react-icons/fa";
import Profile from "./Profile";
import ChangePassword from "./ChangePassword";
import ChangePin from "./ChangePin";
import Complain from "./Complain";

export const Modal = ({ show, onClose, formType }) => {
  if (!show) return null;

  const renderForm = () => {
    switch (formType) {
      case "Personal Information":
        return <Profile />;
      case "Change Password":
        return <ChangePassword />;
      case "Change Pin":
        return <ChangePin />;

      case "Complain":
        return <Complain />;
      case "signOut":
        return (
          <form>
            <p>Are you sure you want to sign out?</p>
          </form>
        );
      default:
        return null;
    }
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-8 right-4">
          <FaTimes className="text-gray-500 hover:text-gray-700 focus:outline-none " />
        </button>
        <h2 className="text-xl font-bold b-12 pb-4">{formType}</h2>
        {renderForm()}
      </div>
    </div>
  );
};
