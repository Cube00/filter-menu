const Item = ({ title, category, image }) => {
  return (
    <>
      <div className="item">
        <img src={image} alt="" />
        <h2> {title} </h2>
        <span> {category} </span>
      </div>
    </>
  );
};

export default Item;
