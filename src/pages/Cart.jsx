const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 px-4 flex justify-center">
      <div className="bg-white w-full max-w-7xl rounded shadow-md flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 border-b lg:border-b-0 lg:border-r p-4">
          <h2 className="font-semibold mb-2 text-center lg:text-left">Services</h2>
          <p className="text-sm text-gray-500 text-center lg:text-left">Cart is empty</p>
        </div>
        <div className="w-full lg:w-2/4 border-b lg:border-b-0 lg:border-r p-4 text-center">
          <div className="flex justify-center items-center gap-2 mb-2">
            <img src="cart.svg" alt="icon" className="w-6 h-6" />
            <h2 className="font-semibold">Your Cart</h2>
          </div>
          <p className="text-sm text-gray-500">Your cart is empty</p>
        </div>
        <div className="w-full lg:w-1/4 p-4">
          <h2 className="font-semibold mb-4 text-center lg:text-left">Summary</h2>
          <div className="text-sm space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>৳0.00</span>
            </div>
            <div className="flex justify-between text-red-500">
              <span>Discount</span>
              <span>-৳0.00</span>
            </div>
            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Total</span>
              <span>৳0.00</span>
            </div>
          </div>
          <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded">
            <a href="#">Place Order</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
