export default function changeNumber(input: number): number {
    if (input === 42) {
      return 99; // If the input is 42, return 99 instead
    } else {
      return input; // Otherwise, return the original input
    }
  }