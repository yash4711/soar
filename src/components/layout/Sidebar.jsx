import clsx from "clsx";
import {
  Home,
  CreditCard,
  Wallet,
  BarChart2,
  Settings,
  Users,
  Building2,
  Banknote,
  Wrench,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  { icon: Home, label: "Dashboard", href: "/" },
  { icon: Banknote, label: "Transactions", href: "#" },
  { icon: Users, label: "Accounts", href: "#" },
  { icon: BarChart2, label: "Investments", href: "#" },
  { icon: CreditCard, label: "Credit Cards", href: "#" },
  { icon: Building2, label: "Loans", href: "#" },
  { icon: Wrench, label: "Services", href: "#" },
  { icon: Wallet, label: "My Privileges", href: "#" },
  { icon: Settings, label: "Setting", href: "/setting" },
];

export function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={clsx(
          "fixed inset-0 bg-gray-800 bg-opacity-50 z-40 lg:hidden",
          isOpen ? "block" : "hidden"
        )}
        onClick={() => onClose()}
      ></div>
      <div
        className={clsx(
          "fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:inset-auto lg:w-64",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">ST</span>
            </div>
            <span className="text-xl font-bold text-blue-900">Soar Task</span>
          </div>
          <button className="lg:hidden" onClick={onClose}>
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className={clsx(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors",
                    item.active && "bg-blue-50 text-blue-600"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
