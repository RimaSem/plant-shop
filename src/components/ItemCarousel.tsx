import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { useContext } from "react";
import { AppContext } from "../appContext";
import Item from "../components/Item";
import "./scss/ItemCarousel.scss";

function ItemCarousel() {
  const context = useContext(AppContext);

  const displayItems = context?.allItems.slice(0, 10).map((item) => (
    <div key={item.id} className="card">
      <Item plantData={item} />
    </div>
  ));

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1000 },
      items: 5,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1000, min: 500 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 350, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel className="item-carousel" responsive={responsive} infinite={true}>
      {displayItems}
    </Carousel>
  );
}

export default ItemCarousel;
