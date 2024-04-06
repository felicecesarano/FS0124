import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component'; // Importa soltanto il component associato a una rotta non lazy (tipicamente home)
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'form',
        loadChildren: () =>
            // Definisce la navigazione lazy per i component con moduli propri
            import('./components/form/form.module').then(
                // Va importato il module, non il routing module
                (m) => m.FormModule
            )
    },
    {
        path: 'done',
        loadChildren: () =>
            // Definisce la navigazione lazy per i component con moduli propri
            import('./components/accomplished/accomplisched.module').then(
                (m) => m.AccomplischedModule
            )
    },
    {
        path: 'undone',
        loadChildren: () =>
            import('./components/unaccomplished/unaccomplisched.module').then(
                (m) => m.UnaccomplischedModule
            )
    },
    {
        path: 'undone',
        loadChildren: () =>
            import('./components/user/user.module').then(
                (m) => m.UserModule
            )
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), FormsModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}

// Le rotte lazy (loadChildren) chiamano i MODULI dei componenti lazy; i moduli istanziano i propri component e i modules che servono ai singoli component (es. form.module istanzia FormsModule) e chiamano il routingModule dei rispettivi component, che avviano i component tramite rotta. La tecnica del lazy loading ha senso SOLTANTO per i component che caricano moduli generali (FormsModule, ReactiveFormsModule, HttpClientModule...) in maniera autonoma