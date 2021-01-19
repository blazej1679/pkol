import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../domain/model/product.model";

@Component({
  selector: 'app-leasing-widget',
  templateUrl: './leasing-widget.component.html',
  styleUrls: ['./leasing-widget.component.scss']
})
export class LeasingWidgetComponent implements OnInit {
  API_URL = "https://stpc.pkoleasing.pl";
  LEASING_FORM_ID = "pko-leasing-form";
  SHOP_ID = "573278292"
  @Input() products: Product[];
  @Input() widget_style = "1";
  @Input() source = "item";
  unique_product_quantity = '1';
  ifRenderFlag = false;
  total_value = 0;
  total_net_value = 0;

  constructor() { }

  ngOnInit(): void {
    this.unique_product_quantity = String(this.products.length);

    for (const product of this.products) {
      this.total_value += Number(product.total_value) * Number(product.product_quantity);
      this.total_net_value = Number(product.net_value) * Number(product.product_quantity);
    }

    this.ifRenderFlag = true;
  }

}