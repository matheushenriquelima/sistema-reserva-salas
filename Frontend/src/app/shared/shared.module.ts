import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PRIMENG_IMPORTS } from './primeng-imports';
import { ServiceModule } from './services/service.module';

@NgModule({
    imports: [
        PRIMENG_IMPORTS,
        FormsModule,
        ReactiveFormsModule,
        ServiceModule
    ],
    providers: [],
    exports: [
        PRIMENG_IMPORTS,
        FormsModule,
        ReactiveFormsModule,
        ServiceModule
    ]
})
export class SharedModule { }
