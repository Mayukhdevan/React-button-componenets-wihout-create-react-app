const Button = (props) => {
  const { color, text } = props;
  return <button className={color}>{text}</button>;
};

const element = (
  <div className="bg-container">
    <h1 className="main-heading">Social Buttons</h1>
    <div className="btn-container">
      <Button color="yellow-btn buttons" text="Like" />
      <Button color="white-btn buttons" text="Comment" />
      <Button color="blue-btn buttons" text="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
