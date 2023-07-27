// Dependencies
import { execSync } from "child_process";
import chalk from "chalk";
import fs from "fs";

// Parse the command-line arguments to find the project name
const args = process.argv.slice(2);

// Grab the first argument after "npm test --", used as the project name
const projectName = args[0];

// If no project name is provided, exit with an error
if (!projectName) {
    console.error(
        chalk.red(
            "Error: No " +
                chalk.blue("project-name") +
                " provided." +
                "\n" +
                "Please add a valid project name to the command."
        ) + chalk.blue(" npm test -- project-name")
    );

    process.exit(1);
}

// Load the environment variables from the .env file
const dotenvPath = `${process.cwd()}/.env`;

try {
    const envConfig = fs.readFileSync(dotenvPath);
    const envVars = envConfig.toString().split("\n");

    envVars.forEach((envVar) => {
        const [key, value] = envVar.split("=");

        if (key && value) {
            process.env[key] = value;
        }
    });
} catch (err) {
    // If the .env file fails to be read, exit with an error message
    console.error(err.message);
    process.exit(1);
}

// Load the Percy token from the environment variables based on the project name
const percyToken =
    process.env[`${projectName.replace(/[-_]/g, "_").toUpperCase()}`];

// If no Percy token is found, exit with an error
if (!percyToken) {
    console.error(
        chalk.red(
            "Error: No Percy token found for " +
                chalk.blue(`${projectName}`) +
                "." +
                "\n" +
                "Please check the project name's spelling, or add a new token to the " +
                chalk.blue(".env") +
                chalk.red(" file.")
        )
    );

    process.exit(1);
}

try {
    // Dynamically set the appropriate PERCY_TOKEN environment variable
    process.env.PERCY_TOKEN = percyToken;

    // Run the Cypress tests using the custom project name
    execSync(
        `percy exec -- cross-env CYPRESS_SPEC_FOLDER=${projectName} cypress run`,
        {
            stdio: "inherit"
        }
    );
} catch (err) {
    // If the tests fail, exit with an error message
    console.error(err.message);
    process.exit(1);
}
