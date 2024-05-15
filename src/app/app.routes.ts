import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StockControlComponent } from './pages/stock-control/stock-control.component';

export const routes: Routes = [
    {
        path: 'stock-control',
        component: StockControlComponent
    }
];
