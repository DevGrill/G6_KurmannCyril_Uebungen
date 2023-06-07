import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PipePageRoutingModule } from './pipe-routing.module';

import { PipePage } from './pipe.page';

import { UkPipe } from '../uk-pipe.pipe';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PipePageRoutingModule],
  declarations: [PipePage, UkPipe],
})
export class PipePageModule {}
