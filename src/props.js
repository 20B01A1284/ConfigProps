import Faker from "faker";

const CommentTable = (props) => {
  return (
    <>
      <tbody>
        <tr>
          <td>
            <h4 className="ui image header">
              <img
                src={Faker.image.people()}
                className="ui mini rounded image"
              />
              <div className="content">
                {props.name}
                <div className="sub header">{props.sub}</div>
              </div>
            </h4>
          </td>
          <td>{props.guess}</td>
        </tr>
      </tbody>
    </>
  );
};
export default CommentTable;
