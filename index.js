function BugFinder (error, message = "Exception caught at:") {
    let fullErrorMessage = error.stack.toString();
    let splittedLines = fullErrorMessage.split('\n');
    let selectedLine = splittedLines[1].split("\\");
    let currInfo = selectedLine[selectedLine.length - 1];

    let fileName = currInfo.split(':')[0];
    let lineNumber = currInfo.split(':')[1];

    console.log("\x1b[31m", `${message} ${fileName}, line no: ${lineNumber}`, "\x1b[0m");
}

module.exports.BugFinder = BugFinder;