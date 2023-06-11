
# QR Code Generator

This is a simple command-line tool that generates a QR code image and saves it to a file, along with saving the corresponding URL to a text file.

## Prerequisites

Make sure you have the following dependencies installed in your project:

- `inquirer` - For user input prompts.
- `qr-image` - For generating QR code images.
- `fs` - For file system operations.

You can install these dependencies using npm:

```
npm install inquirer qr-image fs
```

## Usage

1. Clone this repository or download the code files to your local machine.

2. Open a terminal and navigate to the project directory.

3. Run the command below to execute the QR code generator:


```
node index.js
```

4. You will be prompted to enter a URL. Type the URL and press Enter.

5. The program will generate a QR code image based on the provided URL and save it as `qr_img.png`. It will also save the URL to a text file named `URL.txt`.

6. Verify that the QR code image and text file have been created in the project directory.

## Error Handling

The program includes basic error handling to address TTY errors and other potential issues. If a TTY error occurs, an appropriate error message will be displayed. For any other errors, a generic error message will be shown along with the specific error details.
