{
  const age = 27;

  const result = age >= 18 ? "is not adalt" : "adalt";
  console.log(result);

  type Learner = {
    name: string;
    address: {
      city: string;
      village: string;
      presentAddress: string;
      permenantAddress?: string;
    };
    country: string;
  };

  const learner: Learner = {
    name: "mehedi",
    address: {
      city: "rajshahi",
      village: "barbaria",
      presentAddress: "6201,raj,bD",
    },
    country: "Bangladesh",
  };
  const permenantAddress =
    learner?.address?.permenantAddress ?? "not a permenant address";
  console.log(permenantAddress);

  let username: string | undefined = undefined;
  let displayName = username ?? "Guest";
  console.log(displayName); // Output: "Guest"
}
