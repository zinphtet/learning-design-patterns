//  It aims to minimize the use of memory in an application by sharing
// as much data as possible with related objects

// Intrinsic states  / Extrinsic states
// Intrinsic state requried  by internal methods in our objects, without which they
//absolutely cannot function;
// Extrinsic state be removed and stored externally ;

// Story
// In a large office, employees often need to print documents. Instead of each employee having their own printer (which would be very costly and inefficient), the office has a shared printer. Employees can print documents by specifying their unique printing requests (extrinsic state), but the printer's intrinsic features (like its model, manufacturer, and capabilities) remain the same for everyone.

// Here's how we can implement this story using the Flyweight pattern with functional programming in JavaScript.

const createFlyweight = (model, manufacturer) => {
  return {
    model,
    manufacturer,
    print: (document, user) => {
      console.log(`Printing document : ${document} for ${user}`);
      console.log(
        ` Using printer model : ${model} , manufacturer : ${manufacturer}`
      );
    },
  };
};

const flyweightFactory = () => {
  const flyweights = {};

  const getFlyweight = (model, manufacturer) => {
    const key = `${model}-${manufacturer}`;
    if (!flyweights[key]) {
      flyweights[key] = createFlyweight(model, manufacturer);
    }
    return flyweights[key];
  };

  const getFlyweightCount = () => Object.keys(flyweights).length;

  return { getFlyweight, getFlyweightCount };
};

// applying code
const printerFactory = flyweightFactory();

const printer1 = printerFactory.getFlyweight("001", "ASUS");
printer1.print("Report.pdf", "ALICE");
printer1.print("Slip.pdf", "ZPH");
printer1.print("Expenses.pdf", "YIHUA");

const printer2 = printerFactory.getFlyweight("001", "ASUS");
printer2.print("sum.pdf", "ACCOUNTANT");

//  printer1 and printer2 are sharing the same flyweight object.
// insteadof creating new object . they share the same because of  same model and anufacture
