// {
//   "overrides": [
//     {
//       "extends": [
//         "plugin:@typescript-eslint/recommended-requiring-type-checking"
//       ],
//       "files": ["*.ts", "*.tsx"],
//       "parserOptions": {
//         "project": "tsconfig.json"
//       }
//     }
//   ],
//   "parser": "@typescript-eslint/parser",
//   "parserOptions": {
//     "project": "./tsconfig.json"
//   },
//   "plugins": ["@typescript-eslint"],
//   "extends": ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
//   "rules": {
//     "@typescript-eslint/consistent-type-imports": "warn"
//   }
// }

{
  "overrides"; [
    {
      "extends": [
        "plugin:@typescript-eslint/recommended-requiring-type-checking"
      ],
      "files": ["*.ts", "*.tsx"],
      "parserOptions": {
        "project": "./tsconfig.json",
        "tsconfigRootDir" : "__dirname"
      }
    }
  ],
  "parser"; "@typescript-eslint/parser",
  "parserOptions"; {
    "project"; "./tsconfig.json",
    "tsconfigRootDir"; "__dirname"
  }
  "plugins"; ["@typescript-eslint"],
  "extends"; ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  "rules"; {
    "@typescript-eslint/consistent-type-imports"; "warn"
  }
}