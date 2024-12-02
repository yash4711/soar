import { useSelector, useDispatch } from "react-redux";
import { setSidebarOpen } from "../../store/slices/appConfigSlice";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Toaster } from "react-hot-toast";

export function AuthLayout({ children }) {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.appConfig.isSidebarOpen);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50">
      <Toaster position="top-center" reverseOrder={false} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => dispatch(setSidebarOpen(false))}
      />
      <div className="flex-1">
        <Header onMenuClick={() => dispatch(setSidebarOpen(true))} />
        <main className="p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
