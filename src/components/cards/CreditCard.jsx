export const CreditCard = ({
  dark,
  cardHolder,
  validThru,
  cardNumber,
  balance,
}) => (
  <div
    className={`w-full max-w-sm sm:w-96 h-48 sm:h-56 rounded-2xl p-4 sm:p-6 relative overflow-hidden ${
      dark ? "bg-gray-800 text-white" : "bg-white text-gray-800 border"
    }`}
  >
    <div className="flex flex-col h-full justify-between">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-xs sm:text-sm opacity-70">Balance</p>
          <p className="text-lg sm:text-2xl font-semibold">${balance}</p>
        </div>
        <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-opacity-20 bg-white" />
      </div>
      <div className="space-y-4 sm:space-y-6">
        <p className="text-lg sm:text-2xl tracking-wider">{cardNumber}</p>
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs opacity-70">CARD HOLDER</p>
            <p className="text-sm sm:text-base font-medium">{cardHolder}</p>
          </div>
          <div>
            <p className="text-xs opacity-70">VALID THRU</p>
            <p className="text-sm sm:text-base font-medium">{validThru}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
