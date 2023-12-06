# Astro Starter Kit: Minimal with Preact and TypeScript 

This project is a minimal starter kit for [Astro](https://astro.build) with [Preact](https://preactjs.com) and [TypeScript](https://www.typescriptlang.org). It includes a simple list component that fetches data from a server, displays the data in a table, and allows the user to view the details of each item.

The project uses [JSON Server](https://github.com/typicode/json-server) to create a fake REST API for development purposes.

## Project Structure

- `List.tsx`: This is the main component that fetches data and decides whether to display the list view or the detail view.
- `ListElement.tsx`: This component receives the fetched data as a prop and decides whether to display the `ListTable` component or the `ListDetail` component.
- `ListTable.tsx`: This component receives the data as a prop and displays it in a table. Each row in the table is a `ListItem` component.
- `ListItem.tsx`: This component receives an item as a prop and displays it in a table row. It also includes a "show detail" button that toggles the display of the detail view.
- `ListDetail.tsx`: This component receives an item as a prop and displays its details. It also includes a back button that hides the detail view.

## Running the Project

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Start the JSON Server by running `npx json-server --watch db.json --port 3000`.
4. In a separate terminal, run `npm start` to start the development server.
5. Open `http://localhost:4321` in your browser.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.