import { ActionCreators } from "../app/expensesReducer";

export const GetExpenses = async (dispatch) => {
  try {
    //api call
    const expenses = [
      { id: 1, description: "Groceries", amount: 22.15 },
      { id: 2, description: "Gas", amount: 13.86 },
      { id: 3, description: "Student Loans", amount: 18.43 },
    ];

    dispatch(ActionCreators.setExpenses(expenses));
  } catch {
    console.log("Error");
  }
};
