import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { CreateProduct } from './create-product/create-product';

export const routes: Routes = [
	{ path: "list", component: ProductList },
	{ path: "create", component: CreateProduct },
	{ path: "", redirectTo: "/list", pathMatch: "full" },
	{ path: "**", redirectTo: "/" },
];
