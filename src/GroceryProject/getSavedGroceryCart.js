const getSavedGroceryCart = () => {
  let savedCart = localStorage.getItem("grocery-shopping-cart");
  if (!savedCart) {
    savedCart = localStorage.setItem(
      "grocery-shopping-cart",
      JSON.stringify([])
    );
  }
  return savedCart;
};

export default getSavedGroceryCart;
