{
  // type assertion

  let learner: any;
  learner = "typescript developer";
  learner = 24;
  // (learner as string).

  const kgtoGm = (value: string | number) => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return convertedValue;
    } else if (typeof value === "number") {
      return value * 1000;
    }
  };
  const result1 = kgtoGm(2) as number;
  const result2 = kgtoGm("100");
  console.log(result1, result2);

  let value: unknown = "Hello, TypeScript!";
  let messageLength = (value as string).length;

  console.log(messageLength); // Output: 18
}
