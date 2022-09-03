import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const BreadCrumb = ({ categories }) => {
  return categories ? (
    <>
      <Breadcrumb
        fontSize="sm"
        fontWeight="medium"
        aria-label="Breadcrumb"
        spacing="8px"
        separator={">"}
        className="breadcrumb mx-auto mt-2 flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        {categories.map(({ name }) => {
          return (
            <BreadcrumbItem key={name}>
              <BreadcrumbLink>{name}</BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </>
  ) : (
    <>
      <h5>No se encontraron categorias para esta busqueda...</h5>
    </>
  );
};
export default BreadCrumb;
