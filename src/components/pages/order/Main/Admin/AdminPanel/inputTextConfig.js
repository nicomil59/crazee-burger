import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";

export const getInputTextsConfig = (newProduct) => [
  {
    id: "0",
    value: newProduct.title,
    name: "title",
    type: "text",
    placeholder: "Nom du produit (ex: Super Burger)",
    Icon: <FaHamburger />,
    version: "minimalist",
  },
  {
    id: "1",
    value: newProduct.imageSource,
    name: "imageSource",
    type: "text",
    placeholder:
      "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
    Icon: <BsFillCameraFill />,
    version: "minimalist",
  },
  {
    id: "2",
    value: newProduct.price ? newProduct.price : "",
    name: "price",
    type: "number",
    placeholder: "Prix",
    Icon: <MdOutlineEuro />,
    version: "minimalist",
  },
];
