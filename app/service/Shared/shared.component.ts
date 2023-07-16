import { Component, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class SharedComponent {
  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]+$'),
    ]),
    phone: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  productForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.minLength(3)]),
    image: new FormControl('', [Validators.required]),
    product: new FormControl('', [Validators.required]),
  });

  PhoneError(): any {
    if (this.signupForm.get('phone')?.hasError('required')) {
      return 'You must enter a phone number';
    }
    if (this.signupForm.get('phone')?.hasError('minlength')) {
      return 'Not a valid phone number';
    }
  }

  ProductImageError(): any {
    if (this.productForm.get('image')?.hasError('required')) {
      return 'You must select a image';
    }
  }

  ProductNameError(): any {
    if (this.productForm.get('name')?.hasError('required')) {
      return 'You must enter a product name';
    }
  }

  ProductPriceError(): any {
    if (this.productForm.get('price')?.hasError('required')) {
      return 'You must enter a price';
    }
    if (this.productForm.get('price')?.hasError('minlength')) {
      return 'Not a valid price';
    }
  }

  ProductIdError(): any {
    if (this.productForm.get('product')?.hasError('required')) {
      return 'You must enter a category Id';
    }
  }

  CategoryError(): any {
    if (this.categoryForm.get('name')?.hasError('required')) {
      return 'You must enter a category name';
    }
  }

  NameError(): any {
    if (this.signupForm.get('name')?.hasError('required')) {
      return 'You must enter a name';
    }
    if (this.signupForm.get('name')?.hasError('pattern')) {
      return 'Alphabet only allowed';
    }
  }

  EmailError(): any {
    if (this.signupForm.get('email')?.hasError('required')) {
      return 'You must enter a email';
    }
    if (this.signupForm.get('email')?.hasError('email')) {
      return 'Not a valid email';
    }
  }

  PasswordError(): any {
    if (this.signupForm.get('password')?.hasError('required')) {
      return 'You must enter a password';
    }
    if (this.signupForm.get('password')?.hasError('minlength')) {
      return 'Password should have minimum 6 characters';
    }
  }
}
