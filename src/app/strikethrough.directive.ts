import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) { 
    //this.elem.nativeElement.style.textDecoration='line-through'
  }

  @HostListener('click') onClicks(){ //this is a decorator function that declares a DOM element to listen to
    this.textDeco('line-through')  //handler method to run when the even occurs
  }

  @HostListener('dblclick') onDoubleClicks(){
    this.textDeco('None')
  }
  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;
  }

}
