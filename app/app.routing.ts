import { RouterModule, Routes, UrlSegment } from '@angular/router';

import { DetailsComponent } from './details/details.component';

export const routerModule = RouterModule.forRoot( [{
  path: '',
  component: DetailsComponent,
  data: {
    reuse: true
  }
}, {
  path: 'secondPage',
  component: DetailsComponent
}]);
