export interface ProductQuery { 
    searchText: string | ""
    selectedCategory: string | "Ecksofas"
}
  
export interface Material {
    id: number;
    name: string;
}
  
export interface Product {
    articleCount: number;
    image: string;
    shortName: string;
    name: string;
    urlPath: string;
    redirectUrl: string;
}

export interface FetchResponse<T> {
    count: number;
    results: T[];
}

export interface Search {
    onSearch: (searchText: string) => void;
};