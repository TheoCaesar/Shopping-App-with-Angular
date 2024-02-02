export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    // availableSince: Date;
    availableSince: Date | string;
    isActive: boolean;
    categoryId: number;
    productImages: ProductImages[];
}

export interface ProductImages {
    id:number;
    base64Image:string;
    mime:string;
    imageName:string;
    productId:number;
}
