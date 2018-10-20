import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SettingStoreFacade } from '../../store/setting-store.facade';
import { ISettingModel } from '../../../core/models/setting.model';
import { CoreStoreFacade } from '../../../core/store/core-store.facade';

@Component({
  selector: 'logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {

  logo: ISettingModel;
  selectedLogo: any;
  constructor(private storeSetting: SettingStoreFacade, private coreStoreFacade: CoreStoreFacade) { }

  ngOnInit() {
    this.coreStoreFacade.loadSetting();
    this.coreStoreFacade.logo$.subscribe(logo => {
      this.logo = logo;
    });
  }

  getFiles(e: any) {
    if (e.target.files.length > 0) {
      this.readThis(e.target.files[0]);
    } else {
      this.selectedLogo = null;
    }
  }

  readThis(inputValue: any): void {
    let file: File = inputValue;
    let myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.selectedLogo = myReader.result;
    };
    myReader.readAsDataURL(file);
  }

  updateLogo() {
    if (this.selectedLogo) {
      this.coreStoreFacade.updateLogo(this.selectedLogo);
    }
  }

}
