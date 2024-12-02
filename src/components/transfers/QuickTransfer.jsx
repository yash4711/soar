import { useRef, useState } from "react";
import { Card } from "@/components/ui/Card";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { toast } from "react-hot-toast";

const recipients = [
  {
    name: "Livia Bator",
    role: "CEO",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Randy Press",
    role: "Director",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Workman",
    role: "Designer",
    image: "https://i.pravatar.cc/150?img=6",
  },
  {
    name: "Tony",
    role: "Developer",
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    name: "Ali",
    role: "CTO",
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Sam",
    role: "Tester",
    image: "https://i.pravatar.cc/150?img=9",
  },
];

export default function QuickTransfer() {
  const scrollContainerRef = useRef(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [amount, setAmount] = useState("");
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const container = scrollContainerRef.current;
      const newScrollLeft =
        container.scrollLeft +
        (direction === "right" ? scrollAmount : -scrollAmount);

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      setTimeout(() => {
        checkScrollability();
      }, 100);
    }
  };

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  const handleSend = () => {
    if (selectedUser && amount) {
      toast.success(`Sent $${amount} to ${selectedUser.name}`, {
        duration: 3000,
        style: {
          background: "#333",
          color: "#fff",
          borderRadius: "10px",
        },
      });
      setAmount("");
      setSelectedUser(null);
    }
  };

  return (
    <Card className="w-full">
      <div className="p-6">
        <div className="relative mb-8">
          {/* Left scroll button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-[#2B3674]" />
            </button>
          )}

          {/* Recipients container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-auto no-scrollbar touch-pan-x"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
              padding: "0 1rem",
            }}
            onScroll={checkScrollability}
          >
            {recipients.map((recipient, index) => (
              <div
                key={index}
                onClick={() => setSelectedUser(recipient)}
                className={`flex flex-col items-center gap-2 min-w-max cursor-pointer transition-all duration-200 ${
                  selectedUser === recipient
                    ? "opacity-100 scale-105"
                    : "opacity-60 hover:opacity-60"
                }`}
              >
                <div
                  className={`w-20 h-20 rounded-full overflow-hidden ${selectedUser === recipient ? "border-black border-2" : ""}`}
                >
                  <img
                    src={recipient.image}
                    alt={recipient.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <p className="text-[#2B3674] font-semibold text-base">
                    {recipient.name}
                  </p>
                  <p className="text-[#A3AED0] text-sm">{recipient.role}</p>
                </div>
              </div>
            ))}
          </div>

          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-[#2B3674]" />
            </button>
          )}
        </div>

        <div className="flex gap-3">
          <div className="relative flex-1">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Write Amount"
              className="w-full px-6 h-12 text-[#2B3674] placeholder-[#A3AED0] bg-[#F4F7FE] rounded-full border-none focus:ring-2 focus:ring-[#2B3674] focus:outline-none"
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!selectedUser || !amount}
            className={`h-12 px-6 rounded-full flex items-center gap-2 transition-all duration-200 ${
              selectedUser && amount
                ? "bg-[#171717] text-white hover:bg-[#2B3674]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Send
            <Send className="w-5 h-5 rotate-45" />
          </button>
        </div>
      </div>
    </Card>
  );
}
