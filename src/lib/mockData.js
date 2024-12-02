// Mock user data
export const mockUser = {
  id: 1,
  name: "Max Payne",
  username: "max",
  email: "maxpayne@emample.com",
  dob: "1990-01-25T00:00:00.000Z",
  address: "San Jose, California, USA",
  city: "San Jose",
  postalCode: "45962",
  country: "USA",
  profilePhoto: "https://i.pravatar.cc/150?img=3",
  dateOfBirth: "1990-01-25",
  presentAddress: "San Jose, California, USA",
  permanentAddress: "San Jose, California, USA",
};

// Mock dashboard data
export const mockDashboardData = {
  cards: [
    {
      id: 1,
      type: "dark",
      balance: "5,756",
      cardHolder: "Eddy Cusuma",
      number: "3778 **** **** 1234",
      validThru: "12/22",
    },
    {
      id: 2,
      type: "light",
      balance: "5,756",
      cardHolder: "Eddy Cusuma",
      number: "3778 **** **** 1234",
      validThru: "12/22",
    },
  ],

  transactions: [
    {
      id: 1,
      type: "withdraw",
      description: "Deposit from my Card",
      amount: "850",
      date: "28 January 2021",
      icon: "💳",
    },
    {
      id: 2,
      type: "deposit",
      description: "Deposit Paypal",
      amount: "2,500",
      date: "25 January 2021",
      icon: "🅿️",
    },
    {
      id: 3,
      type: "deposit",
      description: "Jemi Wilson",
      amount: "5,400",
      date: "21 January 2021",
      icon: "👤",
    },
  ],

  weeklyActivity: [
    { day: "Sat", deposits: 200, withdrawals: 450 },
    { day: "Sun", deposits: 100, withdrawals: 350 },
    { day: "Mon", deposits: 250, withdrawals: 300 },
    { day: "Tue", deposits: 350, withdrawals: 450 },
    { day: "Wed", deposits: 200, withdrawals: 150 },
    { day: "Thu", deposits: 250, withdrawals: 400 },
    { day: "Fri", deposits: 300, withdrawals: 350 },
  ],

  expenseStats: {
    Entertainment: 30,
    Investment: 20,
    "Bill Expenses": 15,
    Others: 35,
  },

  quickTransfers: [
    {
      id: 1,
      name: "Livia Bator",
      role: "CEO",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Randy Press",
      role: "Director",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Workman",
      role: "Designer",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ],

  balanceHistory: [
    { month: "Jul", balance: 250 },
    { month: "Aug", balance: 400 },
    { month: "Sep", balance: 750 },
    { month: "Oct", balance: 500 },
    { month: "Nov", balance: 300 },
    { month: "Dec", balance: 450 },
    { month: "Jan", balance: 600 },
  ],
};
