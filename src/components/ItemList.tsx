import { tripPackages } from "../data/packagesData";
import { TripPackage } from "../types/ThemeTypes";
import Card from "./Card";

const ItemList = () => {
  return (
    <div className="product-list !mb-28">
      {tripPackages.map((tripPackage: TripPackage) => (
        <Card key={tripPackage.id} tripPackage={tripPackage} />
      ))}
    </div>
  );
};

export default ItemList;
