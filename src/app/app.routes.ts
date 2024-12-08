import { Routes } from '@angular/router';
import path from 'node:path';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {path: "", component: MainContentComponent},
    {path: "imprint", component: ImprintComponent},
    {path: "privacy", component: PrivacyPolicyComponent}

];
