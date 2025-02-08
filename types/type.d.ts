declare type IBook = {
  id: number;
  img: string;
  title: string;
  cat: string;
  price: number;
  Qunatity: number;
  max: number;
  isLiked: boolean;
};
declare type TDataType = {
  orderId: number;
  id: number;
  img: string;
  title: string;
  cat: string;
  price: number;
  Qunatity: number;
  max: number;
  isLiked: boolean;
}[];

declare interface BooksListProps {
  Books: IBook[];
  isfav?: boolean;
  loading: TLoading;
  error: string | null;
  isDisabled: boolean;
  setisDisabled: (value: boolean) => void;
  RemaingHandler: (max: number, Qunatity: number) => number;
}
declare interface TBooksState {
  Books: IBook[];
  loading: TLoading;
  error: string | null;
}

declare type TLoading = "pending" | "succeeded" | "failed";
declare type TLoadingProps = {
  loading: TLoading;
  error: string | null;
  children: React.ReactNode;
};
declare interface ICartState {
  items: { [key: number]: number };
  productFullInfo: TDataType;
  loading: "pending" | "succeeded" | "failed";
  error: string | null;
  CartwithQuantity: TDataType;
  UserOrders: TDataType;
  confirmorder: boolean;
}

declare type TCatType = {
  id: number;
  title: string;
  num: num;
  img: string;
  cat: string;
}[];
declare interface ICategories {
  Categories: TCatType;
  loading: TLoading;
  error: string | null;
}
declare interface ICartProps {
  CartInfo: TDataType;
}

declare type IFormData = {
  formData: {
    name: string;
    email: string;
    phone: number;
    address: string;
  };
  orderId: number;
};
declare interface IOrdersProps {
  UserData: IFormData;
  OrderData: TDataType;
}
