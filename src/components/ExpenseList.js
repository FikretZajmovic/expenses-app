import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetExpenses } from "../services/expenses";
import { Button, Row, Col } from "react-bootstrap";

export default () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expensesReducer.expenses);

  useEffect(() => {
    GetExpenses(dispatch);
  }, []);

  return expenses.map((e) => (
    <div style={{ marginBottom: "1rem" }}>
      <ListRow expenses={e} />
    </div>
  ));
};

const ListRow = ({ expenses }) => {
  return (
    <div>
      <Row>
        <Col>{expenses.description}</Col>
        <Col>{expenses.amount}</Col>
        <Col xs="auto" className="d-flex justify-content-end">
          <Button variant="warning">Edit</Button>
        </Col>
      </Row>
      <hr />
    </div>
  );
};
