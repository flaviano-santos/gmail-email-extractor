/**
 * Function to extract email addresses from Gmail messages that contain specific subject keywords.
 * The extracted email addresses are written to an active Google Sheet.
 */

// Configuration: Users can modify these keywords to customize the search
var SUBJECT_KEYWORDS = 'subject:"tradução" AND subject:"RBPS"';

function extractEmails() {
  // Search for email threads with the specified subject keywords
  var threads = GmailApp.search(SUBJECT_KEYWORDS);
  var emailAddresses = [];

  // Loop through each thread found by the search query
  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();

    // Loop through each message in the thread
    for (var j = 0; j < messages.length; j++) {
      var from = messages[j].getFrom();

      // Extract the email address from the 'From' field using a regular expression
      var email = from.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);

      // Add the email address to the array if it's not already included
      if (email && emailAddresses.indexOf(email[0]) === -1) {
        emailAddresses.push(email[0]);
      }
    }
  }

  // Get the active spreadsheet and sheet
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (spreadsheet) {
    var sheet = spreadsheet.getActiveSheet();
    if (sheet) {
      // Write the email addresses to the sheet
      for (var k = 0; k < emailAddresses.length; k++) {
        sheet.appendRow([emailAddresses[k]]);
      }
    } else {
      Logger.log("No active sheet found.");
    }
  } else {
    Logger.log("No active spreadsheet found.");
  }

  // Log the extracted email addresses (useful for debugging)
  Logger.log(emailAddresses);
  return emailAddresses;
}
