import { execSync } from "child_process";

function executeCommandSync(command: string): void {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.error(`Error occurred executing command: ${command}`);
    throw error; // Rethrow the error to be handled by the caller
  }
}

function generate(name: string): void {
  // Replace these commands with the actual commands you would like to run
  executeCommandSync(`nest generate module modules/${name} --no-spec`);
  executeCommandSync(`nest generate controller modules/${name} --no-spec`);
  executeCommandSync(`nest generate service modules/${name} --no-spec`);
}

// Get the name argument from the command line
const args = process.argv.slice(2);
if (args.length !== 1) {
  console.error("Usage: ts-node generate.ts <module-name>");
  process.exit(1);
}

const moduleName = args[0];

try {
  generate(moduleName);
} catch (error) {
  console.error(`An error occurred: ${error}`);
  process.exit(1);
}
