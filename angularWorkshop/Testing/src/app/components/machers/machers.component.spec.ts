import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MachersComponent } from './machers.component';

describe('MachersComponent', () => {
  let component: MachersComponent;
  let fixture: ComponentFixture<MachersComponent>;
  let counter = 0
  let afterAllVal = 0
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MachersComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(() => {
    console.log("beforeEach")
  });
  beforeAll(()=>{
    console.log("beforeAll")
    counter=10
  })
  afterEach(function () {
    console.log("afterEach")
    // currentVal = 5;
    counter=0
  });
  afterAll(function () {
    console.log("afterAll")
    // currentVal = 0;
  });

  it('should create', () => {
    console.log(counter)
    expect(component).toBeTruthy();
  });

  it('toBe(expected)', () => {
    counter++
    // expect the actual value to be === to the expected value.
    const thing = "Text"
    expect(thing).toBe("Text");//true
    // expect(thing).toBe("text");//false
  });

  it('toBeDefined()', () => {
    console.log(" counter toBeDefined ", counter)
    //expect the actual value to be defined. (Not undefined)
    let result = "10"
    let result2
    expect(result).toBeDefined();
    // expect(result2).toBeDefined();
  });

  it('toBeFalsy()', () => {
    //expect the actual value to be falsy
    let result = false
    let thing = true
    let obj={name:"asd"}
    expect(result).toBeFalsy();
    expect(thing).toBeTruthy();
    expect(obj).toBeTruthy();
  });

  it('toBeGreaterThanOrEqual(expected)/lessthan', () => {
    // the actual value to be greater than or equal to the expected value.
    let result = 25
    expect(result).toBeGreaterThan(3);
    expect(result).toBeGreaterThanOrEqual(25);
    expect(result).toBeLessThan(26);
    expect(result).toBeLessThanOrEqual(123);
  });
  it('should create', () => {
    //expect the actual value to be NaN (Not a Number).
    const thing = NaN
    expect(thing).toBeNaN();
  });

  it('toContain(expected)', () => {
    //expect the actual value to contain a specific value.
    const array = [0, 1, 2, 3]
    expect(array).toContain(3);

    const string = "my name is Raj"
    expect(string).toContain("Raj");
  });

  it('toEqual(expected)', () => {
    //the actual value to be equal to the expected, using deep equality comparison.
    const bigObject = { "foo": ['bar', 'baz'] }
    expect(bigObject).toEqual({ "foo": ['bar', 'baz'] });
    expect(10).toEqual(10);
    expect("Name").toEqual("Name");
  });

  xit('toDisable test case', () => {
    //the actual value to be equal to the expected, using deep equality comparison.
    expect(10).toEqual(10);
  });
});
