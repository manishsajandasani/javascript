# Symbol

- **What it is**: A primitive data type that creates a unique, anonymous identifier.
- **Key Characteristic**: Every Symbol() call generates a value guaranteed to be different from all other Symbol values.
- **Analogy**: A "secret, invisible label" for objects that won't clash with other properties.
- **Why use it**:
  -  **Prevent Naming Collisions**: Ideal for adding properties to objects without worrying about accidentally overwriting existing properties or being overwritten by new ones. Useful when working with external libraries or extending built-in objects.
  - **"Hidden" Properties**: Symbol properties are not enumerated by standard object iteration methods (for...in, Object.keys()), making them suitable for internal or meta-properties.
  - **Well-known Symbols**: Used internally by JavaScript for language features (e.g., Symbol.iterator, Symbol.asyncIterator).
  - **Accessing Symbol properties**: Requires a reference to the Symbol itself, or using Object.getOwnPropertySymbols().