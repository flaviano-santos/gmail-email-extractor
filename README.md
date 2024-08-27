# Gmail Email Extractor

This Google Apps Script extracts email addresses from Gmail messages that contain specific subject keywords. The extracted email addresses are then written to an active Google Sheet.

## Features

- Search Gmail messages based on user-defined keywords.
- Extract email addresses from the "From" field.
- Write the extracted email addresses to a Google Sheet.
- Easily configurable for different use cases.

## Installation

1. **Create a New Google Sheet:**
   - Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet.

2. **Open the Script Editor:**
   - Click on `Extensions > Apps Script` in the menu.

3. **Copy the Script:**
   - Paste the provided script into the Apps Script editor.

4. **Save the Script:**
   - Click the save icon, and give your project a name (e.g., `Gmail Email Extractor`).

5. **Authorize the Script:**
   - When you run the script for the first time, you'll be prompted to authorize it to access your Gmail and Google Sheets.

## Usage

1. **Run the Script:**
   - After authorization, click the `Run` button to execute the script. The script will search for Gmail threads with the specified keywords, extract email addresses, and write them to the active Google Sheet.

2. **View Results:**
   - The extracted email addresses will be added to the active Google Sheet.

## Customization

- **Modify Search Keywords:**
  - You can change the search criteria by editing the `SUBJECT_KEYWORDS` variable in the script:
    ```javascript
    var SUBJECT_KEYWORDS = 'subject:"tradução" AND subject:"RBPS"';
    ```
  - Replace `"tradução"` and `"RBPS"` with your own keywords.

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
