import data from "../data";
import Item from "./item";

const Fetchdata = ({ state }) => {
  const filtr = data.filter((each) => each.category === state);
  console.log(filtr);
  return (
    <>
      {state === "All"
        ? data.map((eachItem) => {
            const { title, category, image, id } = eachItem;
            return (
              <Item title={title} category={category} image={image} key={id} />
            );
          })
        : filtr.map((each) => {
            const { title, category, image, id } = each;
            return (
              <Item title={title} category={category} image={image} key={id} />
            );
          })}
    </>
  );
};

export default Fetchdata;
