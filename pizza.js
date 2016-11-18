class pizza{
  //type constructor below
constructor(size,meatToppings, veggieToppings){
  this.size = s();
  this.meatToppings = m();
  this.veggieToppings = v();

  //type instance functions below
sizeCost(){
  if(this.size == "Small"){
    return sizeCost() 7.99;
  }
  if(this.size == "Medium"){
    return sizeCost() 9.99;
  }
  if(this.size == "Large"){
    return sizeCost() 12.99;
  }
  if(this.size == Extra-Large){
    return sizeCost() 15.99;
  }




  //type class functions below
toppingCost(top){
    if(top == meat){
    return this.meatToppings.length*.99
  }
    if(top ==veggie){
      return this.veggietoppings.length*.50
    }
}

}
