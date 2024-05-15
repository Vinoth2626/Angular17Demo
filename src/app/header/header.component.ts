import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  iframeSrc = ''
  safeUrl!: SafeResourceUrl;
  //videoUrl = 'https://www.youtube.com/embed/your-videoId'
  constructor(public sanitizer: DomSanitizer) {
    //var url ='https://www.youtube.com/watch?v=kOatEjqtsxk&list=PLfyWdpsiUiPC7bHmDDDM6gGgfo3mgMCAC&index=7'
    this.safeUrl = 'https://www.youtube.com/embed/QslQ2TjgLX8&list=PLfyWdpsiUiPC7bHmDDDM6gGgfo3mgMCAC&index=7'

    //var urllink = url.replace("watch?v=", "v/");


    //this.iframeSrc = this.safeUrl;
    // this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v=kOatEjqtsxk&list=PLfyWdpsiUiPC7bHmDDDM6gGgfo3mgMCAC&index=7');
}
 
}
