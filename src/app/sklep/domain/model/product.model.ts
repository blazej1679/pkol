
export class Product {
  constructor(
    public id: number,
    public name: string,
    public subcategory: number,
    public net_value: string,
    public image: string,
    public discount: number,
    public description: string,
    public is_sponsored: boolean,
    public items_left: number,
    public expiration_timestamp: string,
    public total_value: string,
    public product_category: string,
    public product_vat_rate: string,
    public product_quantity: string | undefined,
  ) {
  }

}
