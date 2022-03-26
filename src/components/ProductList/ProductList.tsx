import React, { useEffect, useState } from "react";
import { Button } from "..";
import { Quotation } from "../ItemInfo/Quotation/Quotation";
import "./ProductList.css";

interface ProductListProps {
  products: any[];
  setProductDetails:(e: any) =>void
}

//Recibir el setter de arreglo de productos
export const ProductList: React.FC<ProductListProps> = ({
  setProductDetails,products
}) => {
  //Arreglo para manejar el orden de los productos que agregran
  const [productArr, setProductArr] = useState([1]);

  return (
    <div className="product-list">
      <h2 className="paragraph-header">Detalla los productos</h2>
      <div className="product-list-arr">
        {products.map((v, idx) => (
          <Quotation
            key={idx}
            productNumber={idx}
            setProductArr={setProductArr}
            setProductDetails={()=>{}}
          />
        ))}
      </div>
      <Button
        content="+ Agregar otro producto"
        size="only-text"
        onClick={() => {
          //Agregar un nuevo producto
         // setProductArr((p) => [...p, p[p.length - 1] + 1]);
          //Utilizar el length del manejador del arreglo de productos para el id
          setProductDetails({
              id: products.length + 1,
              tradename: "",
              brand: "",
              model: "",
              state: "",
              minDescriptions: "",
              primaryUse: "",
              allImages: [],
            });
        }}
      />
    </div>
  );
};
