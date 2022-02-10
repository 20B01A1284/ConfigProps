import React from "react";
import ReactDOM from "react-dom";
import CommentTable from "./props.js";
import './Styles.css'

const App = () => {
  return (
    <table className="ui very basic collapsing celled table">
      <thead>
        <tr>
          <th>Employee</th>
          <th>Correct Guesses</th>
        </tr>
      </thead>
      <CommentTable name="Lena" sub="Human Resources" guess="22" />
      <CommentTable name="Matthew" sub="Fabric Design" guess="15" />
      <CommentTable name="Lindsay" sub="Entertainment" guess="12" />
      <CommentTable name="Mark" sub="Executive" guess="11" />
    </table>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
