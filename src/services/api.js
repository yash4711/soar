import {
  setDashboardData,
  setLoading,
  setError,
} from "@/store/slices/dashboardSlice";
import { loginSuccess, loginFailure } from "@/store/slices/authSlice";
import { mockUser, mockDashboardData } from "@/lib/mockData";

// Mock API delay to simulate network request
const MOCK_API_DELAY = 1000;

// Common mock response handler
const mockResponse = async (data) => {
  await new Promise((resolve) => setTimeout(resolve, MOCK_API_DELAY));
  return data;
};

// Authentication
export const loginUser = (credentials) => async (dispatch) => {
  try {
    await mockResponse(null);

    if (
      credentials.email === "demo@example.com" &&
      credentials.password === "Demo@678#"
    ) {
      const userData = { ...mockUser };
      const token = "mock-jwt-token";

      if (credentials.rememberMe) {
        localStorage.setItem("authToken", token);
      } else {
        sessionStorage.setItem("authToken", token);
      }

      dispatch(loginSuccess(userData));
      return { user: userData, token };
    }
    throw new Error("Invalid email or password. Please try again.");
  } catch (error) {
    dispatch(loginFailure(error.message));
    throw error;
  }
};

export const logoutUser = () => async () => {
  await mockResponse(null);
  localStorage.removeItem("authToken");
  sessionStorage.removeItem("authToken");
  return { success: true };
};

// Dashboard Data
export const fetchDashboardData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const data = await mockResponse(mockDashboardData);
    dispatch(setDashboardData(data));
    dispatch(setLoading(false));
    return data;
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
    throw error;
  }
};

// User Profile
export const updateUserProfile = async (userData) => {
  const response = await mockResponse({ success: true, data: userData });
  return response;
};

export const updateUserSettings = async (settings) => {
  const response = await mockResponse({ success: true, data: settings });
  return response;
};

// Financial Operations
export const performQuickTransfer = async (recipientId, amount) => {
  const response = await mockResponse({
    success: true,
    transactionId: `mock-tx-${Date.now()}`,
    message: `Successfully transferred $${amount} to recipient ${recipientId}`,
    timestamp: new Date().toISOString(),
  });
  return response;
};

export const fetchTransactionHistory = async (filters = {}) => {
  const mockTransactions = Array.from({ length: 10 }, (_, index) => ({
    id: `tx-${index}`,
    type: index % 2 === 0 ? "credit" : "debit",
    amount: Math.floor(Math.random() * 1000) + 100,
    description: `Transaction #${index + 1}`,
    date: new Date(Date.now() - index * 86400000).toISOString(),
    status: "completed",
  }));

  return mockResponse({
    transactions: mockTransactions,
    totalCount: mockTransactions.length,
  });
};

// Analytics
export const fetchAnalytics = async (period = "month") => {
  const mockAnalytics = {
    spending: Array.from({ length: 12 }, () =>
      Math.floor(Math.random() * 1000)
    ),
    income: Array.from({ length: 12 }, () => Math.floor(Math.random() * 2000)),
    categories: {
      Shopping: 30,
      Bills: 25,
      Entertainment: 15,
      Food: 20,
      Other: 10,
    },
  };

  return mockResponse(mockAnalytics);
};
