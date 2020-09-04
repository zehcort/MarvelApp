import { NgModule } from '@angular/core';
import { ComicCardComponent } from './comic-card/comic-card.component'; 
import { IonicModule } from '@ionic/angular';

@NgModule({
    declarations: [ComicCardComponent],
    exports: [ComicCardComponent],
    imports: [IonicModule]
})

export class ComponentsModule{}
