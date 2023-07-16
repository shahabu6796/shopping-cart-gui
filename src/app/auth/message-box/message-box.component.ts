import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit{
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.message = params['message'];
    });
  }
constructor(private route: ActivatedRoute){

}

  @Input()
  isSuccess: boolean = false;
  @Input()
  isError: boolean = false;
  @Input()
  message: string = '';
}
