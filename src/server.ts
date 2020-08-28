import "reflect-metadata";
import app from "./app";

const port: number = 3333;

app.listen(port, (): void => console.log(`Backend running on port: ${port}`));
