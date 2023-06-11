import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

async function generateQRCode() {
  try {
    const answers = await inquirer.prompt([
      {
        message: 'Type your URL',
        name: 'URL',
      },
    ]);

    const URL = answers.URL;

    const qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));

    fs.writeFile('URL.txt', URL, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  } catch (error) {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment.");
    } else {
      console.error('An error occurred:', error);
    }
  }
}

generateQRCode();
