import {Component} from '@angular/core';
import {
	FormGroup,
	FormBuilder,
	REACTIVE_FORM_DIRECTIVES,
	Validators,
	AbstractControl,
	FormControl
}    from '@angular/forms';


// ************** Sample2: Using the FormBuilder, formGroup &  formControlName **********************
@Component({
	directives: [REACTIVE_FORM_DIRECTIVES],
	selector  : 'product2',
	template  : `
    <div>  
        <h3>Using the FormBuilder, formGroup &  formControlName</h3>  
        <form  [formGroup]="myForm" (ngSubmit)="onSubmit()">
        <div *ngIf="myForm.dirty && !myForm.valid" class="alert alert-warning">Form is invalid</div>

        <div class="form-group">  
                <label>
                    Barcode  
                    <input  type="text"  
                            class="form-control"  
                            formControlName="barcode">
                </label>
                
                <div *ngIf="myForm.controls.barcode.touched && !barcode.valid"  class="alert alert-danger">Barcode is invalid!</div>
                <div *ngIf="myForm.controls.barcode.hasError('required')" class="alert alert-danger">Barcode is Required!</div>
                <div *ngIf="myForm.hasError('required', 'barcode')" class="alert alert-danger">Barcode is Required!!</div>
                <div *ngIf="myForm.hasError('maxlength','barcode')" class="alert alert-danger">Barcode is Too Long!</div>
                
        </div>
    
        <button type="submit" class="btn btn-success">Submit</button>  
        </form>  
    </div>  
    `,
})
export class Product2Component {
	myForm:FormGroup;
	barcode:AbstractControl; // base class for both FormControl and FormGroup

	constructor(formBuilder:FormBuilder) {
		this.myForm = new FormGroup({
			barcode: new FormControl('123', [Validators.required])
		});
		// In the first example,  ngForm creates it's own FormGroup,
		// in this case, we want to use our instance variable myForm, which we created with our FormBuilder.

		// This is fine - we can reference barcode anywhere in our component view.
		// For large forms this can get too verbose.


		// this.myForm = formBuilder.group({
		// 	//    'barcode': ['Puki123', Validators.required]
		// 	'barcode': ['Puki123', Validators.compose([Validators.required, Validators.maxLength(10)])]
		// });
		// this.barcode = this.myForm.controls['barcode'];

	}

	onSubmit() {
		console.log('Submitted1: ', this.myForm.value);
	}

}
 
 