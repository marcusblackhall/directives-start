import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive(
    // a directive must have a selector
    {
        selector: '[appBasicHighLighter]'

    }
)
export class BasicHighLightDirective implements OnInit {

    // inject the element into this

    constructor(private elementRef: ElementRef){ }

    ngOnInit(): void {
      this.elementRef.nativeElement.style.backgroundColor = 'green';
    }


}