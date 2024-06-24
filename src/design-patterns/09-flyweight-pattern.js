// The Flyweight pattern is a classical structural solution for optimizing code that is repetitive , slow , and inefficiently shares data.
// It aims to minimize the use of memory in an application by sharings as much data as possible
// with related objects. (eg, ap config , state , and so on , ...)


// In Flyweight pattern , there is a concept of two states : intric and extric . 
// Intrinsic info my be required by internal methods in our objects, which they absolutely cannot function without. 
// Extric info can however be removed and stored externally.
// Objects with the same intrinsic data can replacced with a single shared objecy , created b a factory method.