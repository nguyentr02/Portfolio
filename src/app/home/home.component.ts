import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatToolbarModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  showjob1 = false;
  showjob2 = false;
  showjob0 = true;
  async ngOnInit(): Promise<void> {
    // const navbar = <HTMLElement>document.getElementsByClassName('navbar')[0];
    // // console.log(this.navbar);
    // let temp: any=0;
    // onscroll = (event) => {
    //   console.log(window.scrollY);
    //   console.log('Temp is ',temp);
    //   if (window.scrollY < temp) {
    //     navbar.style.display = 'absolute';
    //   }
    //   temp = window.scrollY;
    // };
    const about = <HTMLElement>document.getElementsByClassName('about-nav')[0];
    about.onclick = function () {
      changePagePosAbout();
    };

    onscroll = (event) => {
      console.log(window.scrollY);
    };

    const exp = <HTMLElement>document.getElementsByClassName('exp-nav')[0];
    exp.onclick = function () {
      changePagePosExp();
    };

    const cnt = <HTMLElement>document.getElementsByClassName('cnt-nav')[0];
    cnt.onclick = function () {
      changePagePosCnt();
    }
    function changePagePosAbout() {
      window.scrollTo(0, 705.5999755859375);
    }

    function changePagePosExp() {
      window.scrollTo(0, 1325);
    }

    function changePagePosCnt() {
      window.scrollTo(0,1950);
    }
  }
  async toggleShowjob0() {
    this.showjob1 = false;
    this.showjob2 = false;
    this.showjob0 = true;
  }

  async toggleShowjob1() {
    this.showjob1 = true;
    this.showjob2 = false;
    this.showjob0 = false;
  }

  async toggleShowjob2() {
    this.showjob1 = false;
    this.showjob2 = true;
    this.showjob0 = false;
  }
}
