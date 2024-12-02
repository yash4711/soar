import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [],
  transactions: [],
  weeklyActivity: [],
  expenseStats: {},
  balanceHistory: [],
  quickTransfers: [],
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboardData: (state, action) => {
      return { ...state, ...action.payload };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setDashboardData, setLoading, setError } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
