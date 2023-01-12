import "./sandbox/represent-dataset";

function RelU(x: number) {
  return Math.max(0, x);
}

class Neuron {
  constructor(
    private inputs: number[],
    private weights: number[],
    private bias: number,
    private activation: (x: number) => number
  ) {}

  output() {
    const n =
      this.inputs.reduce((acc, x, index) => {
        return acc + x * this.weights[index];
      }, 0) + this.bias;

    return this.activation(n);
  }
}

const inputs = [1, 0, 2];
const weights = [0.1, 0.2, 0.3];
const bias = 1;

const n = new Neuron(inputs, weights, bias, RelU);

console.log(n.output());
