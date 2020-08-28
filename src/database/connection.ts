import {createConnection} from "typeorm";

createConnection().then((): void => console.log(`Successfully connection with database`));