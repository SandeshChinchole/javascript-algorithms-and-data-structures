// Introduction to Currying and Partial Application

// solution 1

function add(x) {
    return function(y) {
      return function(z) {
        return x + y + z;
      };
    };
}

add(10)(20)(30);

// solution 2

function add(x) {
    return y => z => x + y + z;
}

add(10)(20)(30);
  