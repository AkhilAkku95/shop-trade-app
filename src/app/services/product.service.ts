import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  selectedProduct = new Subject<IProduct[]>();
  selectedProductsCopy: IProduct[] = [];

  private data: IProduct[] = [
    {
      "id": 1,
      "vendor": "Gap",
      "name": "Men's Pullover Sweatshirt",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Sweater_0.jpg?v=1603266982"],
      "price": "74",
      "tag": "T-shirt",
      "compare_at_price": "200",
      "options": [
        {
          "id": "1010",
          "name": "Size",
          "value": "US 8"
        }, {
          "id": "1011",
          "name": "Size",
          "value": "US 9"
        }, {
          "id": "1012",
          "name": "Size",
          "value": "US 10"
        }, {
          "id": "1013",
          "name": "Size",
          "value": "US 11"
        }, {
          "id": "1014",
          "name": "Size",
          "value": "US 13"
        }
      ]
    },
    {
      "id": 2,
      "vendor": "Puma",
      "name": "Solid Polo Collar Grey T-shirt",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Denim_0.jpg?v=1603267107"],
      "price": "74",
      "compare_at_price": "200",
      "tag": "Denim",
      "options": [
        {
          "id": "1020",
          "name": "Size",
          "value": "xs"
        }, {
          "id": "1021",
          "name": "Size",
          "value": "small"
        }, {
          "id": "1022",
          "name": "Size",
          "value": "medium"
        }, {
          "id": "1023",
          "name": "Size",
          "value": "large"
        }, {
          "id": "1024",
          "name": "Size",
          "value": "xl"
        }
      ]
    },
    {
      "id": 3,
      "vendor": "U.S Polo Assn.",
      "name": "men Blue Regular Fit Striped Casual Shirt",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Shirt_4.jpg?v=1603267306"],
      "price": "50",
      "compare_at_price": "100",
      "tag": "shirt",
      "options": [
        {
          "id": "1030",
          "name": "Size",
          "value": "xs"
        }, {
          "id": "1031",
          "name": "Size",
          "value": "small"
        }, {
          "id": "1032",
          "name": "Size",
          "value": "medium"
        }, {
          "id": "1033",
          "name": "Size",
          "value": "large"
        }, {
          "id": "1034",
          "name": "Size",
          "value": "xl"
        }
      ]
    },
    {
      "id": 4,
      "vendor": "Here & Now",
      "name": "Men Blue Solid Biker jacket",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Jacket_1.jpg?v=1603267865"],
      "price": "40",
      "compare_at_price": "80",
      "tag": "jacket",
      "options": [
        {
          "id": "1040",
          "name": "Size",
          "value": "xs"
        }, {
          "id": "1041",
          "name": "Size",
          "value": "small"
        }, {
          "id": "1042",
          "name": "Size",
          "value": "medium"
        }, {
          "id": "1043",
          "name": "Size",
          "value": "large"
        }, {
          "id": "1044",
          "name": "Size",
          "value": "xl"
        }
      ]
    },
    {
      "id": 5,
      "vendor": "Roadster",
      "name": "Men Red Solid Padded jacket",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Jacket_0.jpg?v=1603268267"],
      "price": "50",
      "compare_at_price": "100",
      "tag": "jacket",
      "options": [
        {
          "id": "1050",
          "name": "Size",
          "value": "xs"
        }, {
          "id": "1051",
          "name": "Size",
          "value": "small"
        }, {
          "id": "1052",
          "name": "Size",
          "value": "medium"
        }, {
          "id": "1053",
          "name": "Size",
          "value": "large"
        }, {
          "id": "1054",
          "name": "Size",
          "value": "xl"
        }
      ]
    },
    {
      "id": 6,
      "vendor": "Roadster",
      "name": "Men Black & Red Regular Fit Checked",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Shirt_5.jpg?v=1603268503"],
      "price": "60",
      "compare_at_price": "120",
      "tag": "shirt",
      "options": [
        {
          "id": "1060",
          "name": "Size",
          "value": "38"
        }, {
          "id": "1051",
          "name": "Size",
          "value": "39"
        }, {
          "id": "1052",
          "name": "Size",
          "value": "40"
        }, {
          "id": "1053",
          "name": "Size",
          "value": "44"
        }, {
          "id": "1054",
          "name": "Size",
          "value": "46"
        }
      ]
    },
    {
      "id": 7,
      "vendor": "WRONG",
      "name": "Men Navy Blue Slim Fit Checked Casual Shirt",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Shirt_6.jpg?v=1603268952"],
      "price": "70",
      "compare_at_price": "140",
      "tag": "shirt",
      "options": [
        {
          "id": "1070",
          "name": "Size",
          "value": "38"
        }, {
          "id": "1071",
          "name": "Size",
          "value": "39"
        }, {
          "id": "1072",
          "name": "Size",
          "value": "40"
        }, {
          "id": "1073",
          "name": "Size",
          "value": "44"
        }, {
          "id": "1074",
          "name": "Size",
          "value": "46"
        }
      ]
    },
    {
      "id": 8,
      "vendor": "Mast & Harbour",
      "name": "Men Brown Cable Knit Sweater",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Sweater_1.jpg?v=1603269059"],
      "price": "80",
      "compare_at_price": "120",
      "tag": "shirt",
      "options": [
        {
          "id": "1080",
          "name": "Size",
          "value": "38"
        }, {
          "id": "1081",
          "name": "Size",
          "value": "39"
        }, {
          "id": "1082",
          "name": "Size",
          "value": "40"
        }, {
          "id": "1083",
          "name": "Size",
          "value": "44"
        }, {
          "id": "1084",
          "name": "Size",
          "value": "46"
        }
      ]
    },
    {
      "id": 9,
      "vendor": "Jack & Jones",
      "name": "Men Green Slim Fit Printed Round Neck Shirt",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Teeshirt_0.jpg?v=1603269161"],
      "price": "90",
      "compare_at_price": "145",
      "tag": "T-shirt",
      "options": [
        {
          "id": "1090",
          "name": "Size",
          "value": "xs"
        }, {
          "id": "1091",
          "name": "Size",
          "value": "small"
        }, {
          "id": "1092",
          "name": "Size",
          "value": "medium"
        }, {
          "id": "1093",
          "name": "Size",
          "value": "large"
        }, {
          "id": "1094",
          "name": "Size",
          "value": "xl"
        }
      ]
    },
    {
      "id": 11,
      "vendor": "U.S Polo Assn.",
      "name": "Men Green & Blue Striped Polo Collar…",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Polo_Tee_Shirt_0.jpg?v=1603270521"],
      "price": "110",
      "compare_at_price": "155",
      "tag": "T-shirt",
      "options": [
        {
          "id": "1011",
          "name": "Size",
          "value": "xs"
        }, {
          "id": "1012",
          "name": "Size",
          "value": "small"
        }, {
          "id": "1013",
          "name": "Size",
          "value": "medium"
        }, {
          "id": "1014",
          "name": "Size",
          "value": "large"
        }, {
          "id": "1015",
          "name": "Size",
          "value": "xl"
        }
      ]
    },
    {
      "id": 12,
      "vendor": "U.S Polo Assn.",
      "name": "Men White Checked Polo Collar T-Shirt",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Polo_Tee_Shirt_1.jpg?v=1603270661"],
      "price": "120",
      "compare_at_price": "165",
      "tag": "T-shirt",
      "options": [
        {
          "id": "1200",
          "name": "Size",
          "value": "xs"
        }, {
          "id": "1201",
          "name": "Size",
          "value": "small"
        }, {
          "id": "1202",
          "name": "Size",
          "value": "medium"
        }, {
          "id": "1203",
          "name": "Size",
          "value": "large"
        }, {
          "id": "1204",
          "name": "Size",
          "value": "xl"
        }
      ]
    },
    {
      "id": 13,
      "vendor": "Roadster",
      "name": "Men navy Blue & Grey Regular Fit Che..",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Shirt_1.jpg?v=1603271019"],
      "price": "130",
      "compare_at_price": "160",
      "tag": "shirt",
      "options": [
        {
          "id": "1300",
          "name": "Size",
          "value": "xs"
        }, {
          "id": "1301",
          "name": "Size",
          "value": "small"
        }, {
          "id": "1302",
          "name": "Size",
          "value": "medium"
        }, {
          "id": "1303",
          "name": "Size",
          "value": "large"
        }, {
          "id": "1304",
          "name": "Size",
          "value": "xl"
        }
      ]
    },
    {
      "id": 14,
      "vendor": "Jack & Jones",
      "name": "Men Purple Regular Fit Printed Casual..",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Shirt_3.jpg?v=1603271332"],
      "price": "140",
      "compare_at_price": "170",
      "tag": "shirt",
      "options": [
        {
          "id": "1400",
          "name": "Size",
          "value": "xs"
        }, {
          "id": "1401",
          "name": "Size",
          "value": "small"
        }, {
          "id": "1402",
          "name": "Size",
          "value": "medium"
        }, {
          "id": "1403",
          "name": "Size",
          "value": "large"
        }, {
          "id": "1404",
          "name": "Size",
          "value": "xl"
        }
      ]
    },
    {
      "id": 16,
      "vendor": "Mast & Harbour",
      "name": "Men Grey Slim Fit Faded Casual Deni..",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Denim_3.jpg?v=1603271941"],
      "price": "160",
      "compare_at_price": "190",
      "tag": "Denim",
      "options": [
        {
          "id": "1600",
          "name": "Size",
          "value": "xs"
        }, {
          "id": "1601",
          "name": "Size",
          "value": "small"
        }, {
          "id": "1602",
          "name": "Size",
          "value": "medium"
        }, {
          "id": "1603",
          "name": "Size",
          "value": "large"
        }, {
          "id": "1604",
          "name": "Size",
          "value": "xl"
        }
      ]
    },
    {
      "id": 17,
      "vendor": "Highlander",
      "name": "Men Blue Slim Fit Solid Casual Denim...",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Denim_1.jpg?v=1603272203"],
      "price": "170",
      "compare_at_price": "215",
      "tag": "Denim",
      "options": [
        {
          "id": "1700",
          "name": "Size",
          "value": "38"
        }, {
          "id": "1701",
          "name": "Size",
          "value": "39"
        }, {
          "id": "1702",
          "name": "Size",
          "value": "40"
        }, {
          "id": "1703",
          "name": "Size",
          "value": "44"
        }, {
          "id": "1704",
          "name": "Size",
          "value": "46"
        }
      ]
    },
    {
      "id": 18,
      "vendor": "Roadster",
      "name": "Men Blue Regular Fit Solid Casual Den...",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Denim_4.jpg?v=1603272486"],
      "price": "180",
      "compare_at_price": "225",
      "tag": "Denim",
      "options": [
        {
          "id": "1800",
          "name": "Size",
          "value": "38"
        }, {
          "id": "1801",
          "name": "Size",
          "value": "39"
        }, {
          "id": "1802",
          "name": "Size",
          "value": "40"
        }, {
          "id": "1803",
          "name": "Size",
          "value": "44"
        }, {
          "id": "1804",
          "name": "Size",
          "value": "46"
        }
      ]
    },
    {
      "id": 19,
      "vendor": "GAP",
      "name": "Men's Grey & Blue Logo Contrast Ragl...",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Sweater_3.jpg?v=1603272648"],
      "price": "190",
      "compare_at_price": "250",
      "tag": "shirt",
      "options": [
        {
          "id": "1900",
          "name": "Size",
          "value": "38"
        }, {
          "id": "1901",
          "name": "Size",
          "value": "39"
        }, {
          "id": "1902",
          "name": "Size",
          "value": "40"
        }, {
          "id": "1903",
          "name": "Size",
          "value": "44"
        }, {
          "id": "1904",
          "name": "Size",
          "value": "46"
        }
      ]
    },
    {
      "id": 20,
      "vendor": "Gap",
      "name": "Men's Pullover Sweatshirt",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Sweater_2.jpg?v=1603272809"],
      "price": "200",
      "compare_at_price": "250",
      "tag": "shirt",
      "options": [
        {
          "id": "2000",
          "name": "Size",
          "value": "38"
        }, {
          "id": "2001",
          "name": "Size",
          "value": "39"
        }, {
          "id": "2002",
          "name": "Size",
          "value": "40"
        }, {
          "id": "2003",
          "name": "Size",
          "value": "44"
        }, {
          "id": "2004",
          "name": "Size",
          "value": "46"
        }
      ]
    },
    {
      "id": 21,
      "vendor": "Tommy Hilfiger",
      "name": "Men Navy Blue Printed Round Neck T..",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Shirt_0.jpg?v=1603273849"],
      "price": "210",
      "compare_at_price": "260",
      "tag": "T-shirt",
      "options": [
        {
          "id": "2100",
          "name": "Size",
          "value": "38"
        }, {
          "id": "2101",
          "name": "Size",
          "value": "39"
        }, {
          "id": "2102",
          "name": "Size",
          "value": "40"
        }, {
          "id": "2103",
          "name": "Size",
          "value": "44"
        }, {
          "id": "2104",
          "name": "Size",
          "value": "46"
        }
      ]
    },
    {
      "id": 22,
      "vendor": "Here&Now",
      "name": "Men Teal Blue & Black printed Round N..",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Teeshirt_10.jpg?v=1603274191"],
      "price": "220",
      "compare_at_price": "260",
      "tag": "T-shirt",
      "options": [
        {
          "id": "2200",
          "name": "Size",
          "value": "xs"
        }, {
          "id": "2201",
          "name": "Size",
          "value": "small"
        }, {
          "id": "2202",
          "name": "Size",
          "value": "medium"
        }, {
          "id": "2203",
          "name": "Size",
          "value": "large"
        }, {
          "id": "2204",
          "name": "Size",
          "value": "xl"
        }
      ]
    },
    {
      "id": 23,
      "vendor": "Difference Of Opinion",
      "name": "Men Sea Green Solid Round Neck T-Sh..",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Teeshirt_9.jpg?v=1603274954"],
      "price": "230",
      "compare_at_price": "280",
      "tag": "T-shirt",
      "options": [
        {
          "id": "2300",
          "name": "Size",
          "value": "xs"
        }, {
          "id": "2301",
          "name": "Size",
          "value": "small"
        }, {
          "id": "2302",
          "name": "Size",
          "value": "medium"
        }, {
          "id": "2303",
          "name": "Size",
          "value": "large"
        }, {
          "id": "2304",
          "name": "Size",
          "value": "xl"
        }
      ]
    },
    {
      "id": 24,
      "vendor": "Maniac",
      "name": "Men Navy Blue Printed Round Neck T...",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Teeshirt_5.jpg?v=1603275183"],
      "price": "240",
      "compare_at_price": "290",
      "tag": "shirt",
      "options": [
        {
          "id": "2400",
          "name": "Size",
          "value": "xs"
        }, {
          "id": "2401",
          "name": "Size",
          "value": "small"
        }, {
          "id": "2402",
          "name": "Size",
          "value": "medium"
        }, {
          "id": "2403",
          "name": "Size",
          "value": "large"
        }, {
          "id": "2404",
          "name": "Size",
          "value": "xl"
        }
      ]
    },
    {
      "id": 25,
      "vendor": "HRX By Hrithik Roshan",
      "name": "Men Navy Blue Solid Round Neck T-Sh...",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Teeshirt_8.jpg?v=1603275303"],
      "price": "250",
      "compare_at_price": "295",
      "tag": "shirt",
      "options": [
        {
          "id": "2500",
          "name": "Size",
          "value": "xs"
        }, {
          "id": "2501",
          "name": "Size",
          "value": "small"
        }, {
          "id": "2502",
          "name": "Size",
          "value": "medium"
        }, {
          "id": "2503",
          "name": "Size",
          "value": "large"
        }, {
          "id": "2504",
          "name": "Size",
          "value": "xl"
        }
      ]
    },
    {
      "id": 26,
      "vendor": "Mast & Harbour",
      "name": "Men Navy Blue & Pink Printed Henley N...",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Teeshirt_2.jpg?v=1603275425"],
      "price": "260",
      "compare_at_price": "300",
      "tag": "shirt",
      "options": [
        {
          "id": "2600",
          "name": "Size",
          "value": "xs"
        }, {
          "id": "2601",
          "name": "Size",
          "value": "small"
        }, {
          "id": "2602",
          "name": "Size",
          "value": "medium"
        }, {
          "id": "2603",
          "name": "Size",
          "value": "large"
        }, {
          "id": "2604",
          "name": "Size",
          "value": "xl"
        }
      ]
    },
    {
      "id": 27,
      "vendor": "Roadster",
      "name": "Men Navy Blue Printed Round Neck T...",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Teeshirt_3.jpg?v=1603275679"],
      "price": "270",
      "compare_at_price": "310",
      "tag": "T-shirt",
      "options": [
        {
          "id": "2700",
          "name": "Size",
          "value": "xs"
        }, {
          "id": "2701",
          "name": "Size",
          "value": "small"
        }, {
          "id": "2702",
          "name": "Size",
          "value": "medium"
        }, {
          "id": "2703",
          "name": "Size",
          "value": "large"
        }, {
          "id": "2704",
          "name": "Size",
          "value": "xl"
        }
      ]
    },
    {
      "id": 28,
      "vendor": "Bushirt",
      "name": "Men Navy Blue Solid Round Neck T-Shi...",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Teeshirt_4.jpg?v=1603275867"],
      "price": "280",
      "compare_at_price": "330",
      "tag": "T-shirt",
      "options": [
        {
          "id": "2800",
          "name": "Size",
          "value": "xs"
        }, {
          "id": "2801",
          "name": "Size",
          "value": "small"
        }, {
          "id": "2802",
          "name": "Size",
          "value": "medium"
        }, {
          "id": "2803",
          "name": "Size",
          "value": "large"
        }, {
          "id": "2804",
          "name": "Size",
          "value": "xl"
        }
      ]
    },
    {
      "id": 29,
      "vendor": "Tommy Hilfiger",
      "name": "Men Navy Blue Printed Round Neck T-S...",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Teeshirt_7.jpg?v=1603276021"],
      "price": "290",
      "compare_at_price": "340",
      "tag": "T-shirt",
      "options": [
        {
          "id": "2900",
          "name": "Size",
          "value": "xs"
        }, {
          "id": "2901",
          "name": "Size",
          "value": "small"
        }, {
          "id": "2902",
          "name": "Size",
          "value": "medium"
        }, {
          "id": "2903",
          "name": "Size",
          "value": "large"
        }, {
          "id": "2904",
          "name": "Size",
          "value": "xl"
        }
      ]
    },
    {
      "id": 30,
      "vendor": "H&M",
      "name": "Men Black Solid 3-Pack T-Shirts Slim Fit",
      "image_src": ["https://cdn.shopify.com/s/files/1/0455/2176/4502/files/Teeshirt_7.jpg?v=1603276021"],
      "price": "300",
      "compare_at_price": "360",
      "tag": "T-shirt",
      "options": [
        {
          "id": "3000",
          "name": "Size",
          "value": "xs"
        }, {
          "id": "3001",
          "name": "Size",
          "value": "small"
        }, {
          "id": "3002",
          "name": "Size",
          "value": "medium"
        }, {
          "id": "3003",
          "name": "Size",
          "value": "large"
        }, {
          "id": "3004",
          "name": "Size",
          "value": "xl"
        }
      ]
    },
  ];
  constructor() { }

  getProducts(): Observable<IProduct[]> {
    return of(this.data);
  }

  updateSelectedProduct(products: Array<IProduct>): void {
    this.selectedProduct.next(products);
  }

  selectedProductSubscriber(): Observable<IProduct[]> {
    return this.selectedProduct.asObservable();
  }

}
