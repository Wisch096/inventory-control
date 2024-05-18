import { Routes } from '@angular/router';
import { HomeComponent } from './pages/dashboard/home.component';
import { StockControlComponent } from './pages/stock-control/stock-control.component';
import path from 'path';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    {
        path: 'stock-control',
        component: StockControlComponent
    },
    {
        path: 'dashboard',
        component: HomeComponent,
    },
    {
        path: 'products',
        component: ProductsComponent
    },
];
