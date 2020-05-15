import {Category} from '../domain/model/category.model';

export class DataMockService {

  private categories: Category[] = [
    new Category(0, 'TELEFONY', 0, null),
    new Category(1, 'TELEWIZORY', 0, null),
    new Category(2, 'RĘCZNIKI', 0, null),
    new Category(3, 'TRAKTORY', 0, null),
    new Category(4, 'DONICZKI', 0, null),
    new Category(5, 'JEDZENIE', 0, null),
    new Category(6, 'AI & MACHINE LEARNING', 0, null),
    new Category(7, 'MOCK MOCK', 0, null),
    new Category(8, 'FAKE_FAKE', 0, null)
  ];

  private mockImage1 = 'https://picsum.photos/200/300';
  private mockDesription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  // private productsTvs: Product[] = [
  //   new Product(0, 'Projector 4k fhd qa', 1, 4555, this.mockImage1, 199, this.mockDesription,  false, 11, '2020-01-02'),
  //   new Product(1, 1, this.mockDesription, 11, '2020-01-02', this.mockImage1, false, 'Ed, Edd & Eddie TV1', 4555, 199),
  //   new Product(2, 1, this.mockDesription, 12, '2020-01-03', this.mockImage1, false, 'Super ED TV2', 5444, 99),
  //   new Product(3, 1, this.mockDesription, 14, '2020-01-05', this.mockImage1, false, 'Super OLED TV4', 7222, 12),
  // ];
  //
  // private towels: Product[] = [
  //   new Product(4, 2, this.mockDesription, 1, null, this.mockImage1, false, 'Towel cotton', 55, 1199),
  //   new Product(5, 2, this.mockDesription, 2, null, this.mockImage1, false, 'Towel plastic', 12, 990),
  //   new Product(6, 2, this.mockDesription, 3, null, this.mockImage1, false, 'Towel poliester', 11, 533),
  //   new Product(7, 2, this.mockDesription, 4, null, this.mockImage1, false, 'Towel towel towel xyz', 1010, 112),
  // ];

  // private allProducts: Product[] = this.productsTvs.slice().concat(this.towels.slice());

  public getCategories(): Category[] {
    return this.categories;
  }

  // public getProductsByCategoryId(categoryId: number): Product[] {
  //   if (categoryId % 2) {
  //     return this.productsTvs;
  //   }
  //   return this.towels;
  // }
  //
  // public getProductById(productId: number): Product {
  //   return this.allProducts[productId];
  // }

}