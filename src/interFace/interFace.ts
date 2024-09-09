import { StaticImageData } from 'next/image';
import React from 'react';
// context api data type
export interface AppContextType {
  sideMenuOpen?: boolean;
  toggleSideMenu?: () => void;
  MenuCloseToggle?: () => void;
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  setInputValue:React.Dispatch<React.SetStateAction<boolean>>
  setSideMenuOpen:React.Dispatch<React.SetStateAction<boolean>>
  setCloseMenuItem:React.Dispatch<React.SetStateAction<boolean>>
  inputValue:boolean;
  closeMenuItem:boolean;
  inputTogglePage:() => void;
  // filterType, setFilterType
  filterType:string;
  setFilterType:React.Dispatch<React.SetStateAction<string>>;
}
//home-categories type
export interface categoriesType{
  id:number;
  icon:()=> JSX.Element;
  title:string;
  description:string;
}

//counter_data type
export interface counterType{
  id:number;
  countNum:number
  countTitle:string;
  counterIcon:string
}

// gallery type
export interface galleryType{
  id:number;
  image:StaticImageData;
  icon:string;
  category?:string;
  filterData?:any;
  title?:string;
  info?:string
}

// gallery category type
export interface galleryCategoryType{
  id:number;
  category:string
}
// team type
interface socialIconType{
  id:number;
  socialLink:string;
  icon:string;
}
export interface teamType{
  id:number;
  image:StaticImageData;
  authorName:string;
  destination:string;
  socialIcon:socialIconType[]
}


// product type
export interface productsType {
  id: number;
  image: StaticImageData;
  title: string;
  price: number;
  rating: number;
  quantity:number;
  category:any;
  data?:any
}
//hero type
export interface heroType{
id:number;
image:StaticImageData;
title:string;
info:string;
desc:string;
}
//service type
export interface serviceType{
  id:number;
  image:StaticImageData;
  title:string;
  desc:string;
  active?:string
}

//productCategoryType
export interface productCategoryType{
  id:number;
  category:string;
  icon:string;
}
// id type
export interface idType {
  id?: number;
}

// brands type
export interface brandsType {
  id: number;
  image: StaticImageData;
}

// testimonial type
export interface testimonialType {
  id: number;
  image: StaticImageData;
  description: string;
  authorName:string;
  destination:string;
}

// blog type
interface blogInfoType{
  id:number;
  icon:string;
  info:string;
}
export interface blogsType {
  id: number;
  image:StaticImageData;
  title:string;
  blogInfo?:blogInfoType[];
  desc?:string;
  date?:string
}

// pricing plan
interface PricingListItemType {
  id: number;
  info: string;
  icon?: string;
}

export interface PricingPlanItemType {
  id: number;
  image:StaticImageData;
  title: string;
  pricingList?: PricingListItemType[];
  price: number | string;
  active?:string;
}


//product type
export interface Product {
  id: number;
  attributes: {
      productName: string;
      description: string;
      images: {
        data: {
          id: number;
          attributes: {
            url: string;
          }
        }[]
      }
      category: {
        data: {
          attributes: {
            slug: string;
            nameCategory: string;
          }
        }
      }
  };
}








