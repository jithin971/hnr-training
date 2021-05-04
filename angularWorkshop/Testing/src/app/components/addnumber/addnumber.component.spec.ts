import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { TestService } from 'src/app/services/test.service';
import { UserService } from 'src/app/services/user.service';

import { AddnumberComponent } from './addnumber.component';
// Karma isn a tool for executing source code against test code inside a browser environment.
// describe function, which is a suite of tests, and an it function, which is the test itself.
// We are describing a test suite using the function describe(). 
describe('AddnumberComponent', () => {
  let component: AddnumberComponent;
  let fixture: ComponentFixture<AddnumberComponent>;
  let usersService: UserService;

  beforeEach(async () => {
      // configureTestingModule function where you provide all the necessary dependencies for your 
  // component to function in a test environment
    await TestBed.configureTestingModule({
      declarations: [AddnumberComponent],
      providers: [UserService,TestService]
    })
      .compileComponents();
    // usersService = TestBed.get(UserService);
  });

  beforeEach(() => {
    // TestBed.createComponent() creates an instance of the AddnumberComponent, 
    // adds a corresponding element to the test-runner DOM, and returns a ComponentFixture.

    fixture = TestBed.createComponent(AddnumberComponent);

    // The ComponentFixture used for for interacting with the created component and its corresponding element.
    // A fixture is a wrapper for a component and its template.
    component = fixture.componentInstance;
    // Change detection isn't done automatically, so you'll call detectChanges on a fixture to tell Angular to run change detection
    fixture.detectChanges();
  });

  //it is where you perform individual tests.
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to add two whole numbers', () => {
    expect(component.add(2, 2)).toEqual(4);
  });
  it('should be able to add a whole number and a negative number', () => {
    expect(component.add(2, -1)).toEqual(1);
  });
  it('should be able to add a whole number and a zero', () => {
    // Arrange
    const firstNum = 2
    const SecondNum = 0
    // Act
    const result = component.add(2, 0)

    //Assert
    // A matcher function compares between an actual value (passed to the expect() 
    // function it's chained with) and an expected value (directly passed as a parameter to the matcher) 
    // and returns either true or false which either passes or fails the spec.
    expect(result).toEqual(2);
  });
});

// The 3A pattern is simple and provides a uniform structure for all tests in the suite.
//  This uniform structure is one of its biggest advantages: once you get used to this pattern,
//   you can read and understand the tests more easily

// The arrange section is where you set up the objects to be tested. 
// You bring the system under test to a desired state and configure the dependencies: either instantiate
//  them directly or prepare their test doubles.


// The act section is where you act upon the system under test. 
// You call one of its methods: pass the dependencies and capture the output value if any.


// The assert section allows you to make the claims about the outcome. 
// This may include the return value, the final state of the SUT and its collaborators, or the methods the SUT called on them.