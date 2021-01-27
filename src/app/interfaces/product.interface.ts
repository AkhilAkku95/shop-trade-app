export interface IProduct {
    id: number;
    vendor: string;
    name: string;
    image_src: string[];
    price: string;
    tag: string;
    compare_at_price: string;
    options: IOption[];
}

export interface IOption {
    id: string;
    name: string;
    value: string;
}