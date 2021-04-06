const hardProcess = (iterations) => {
  for (let i = 0; i < iterations; i++) {
    console.log("Iteration Executed");
  }

  return `${ iterations } Iterations Executed !`;
};

export default hardProcess;