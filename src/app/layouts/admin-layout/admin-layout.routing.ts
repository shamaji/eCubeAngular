import { Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { TableListComponent } from '../table-list/table-list.component';
import { CompanyDetailComponent } from '../company-detail/company-detail.component';
import { GameZoneComponent } from '../game-zone/game-zone.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'company-detail',   component: CompanyDetailComponent },
    { path: 'gamezone',     component: GameZoneComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent }
];
