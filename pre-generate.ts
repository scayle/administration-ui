// can be ignored as we run this with
// ts-node --compiler-options "{\"isolatedModules\":false}" pre-generate.ts
// @ts-ignore
const fs = require("fs")
const execSync = require('child_process').execSync;
const gateway = __dirname + '/external/gateway';

const branch = "restructurize"; // "tags/v0.1.0"

if (!fs.existsSync(gateway)) {
    fs.mkdirSync(gateway, {
        recursive: true,
    });

    let output = execSync("git init && git remote add -f origin https://github.com/scayle/gateway", { encoding: "utf-8", cwd: gateway })
    console.log("fetching gateway:\n" + output)

    output = execSync("git config core.sparseCheckout true", { encoding: "utf-8", cwd: gateway })
    console.log(output)

    output = execSync("echo \"graph/definition/\" >> .git/info/sparse-checkout", { encoding: "utf-8", cwd: gateway })
    console.log(output)
}

//output = execSync("git checkout tags/v0.1.0", { encoding: "utf-8", cwd: gateway })
let output = execSync(`git checkout ${branch} && git pull`, { encoding: "utf-8", cwd: gateway })
console.log(output)



