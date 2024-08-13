const CarManager = {
  // request information
  requestInfo(model, id) {
    return `The information for ${model} with ID
    ${id} is foobar`;
  },
  // purchase the car
  buyVehicle(model, id) {
    return `You have successfully purchased Item
    ${id}, a ${model}`;
  },
  // arrange a viewing
  arrangeViewing(model, id) {
    return `You have booked a viewing of ${model} (
    ${id} ) `;
  },
};
// The CarManag

CarManager.excute = function (name) {
  return (
    CarManager[name] &&
    CarManager[name].apply(CarManager, [].slice.call(arguments, 1))
  );
};
// carManager,
// [].slice.call(arguments, 1))

CarManager.excute("requestInfo", "BMW", "001NX");
