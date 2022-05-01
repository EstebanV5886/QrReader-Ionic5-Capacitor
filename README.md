# QrReader-Ionic5-Capacitor

This is a small example of scanning a qr code with ionic 5 and capacitor using the https://bitbucket.org/golbros/capacitor-qrscanner/src/master/ plugin.

npm: https://www.npmjs.com/package/@johnbraum/capacitor-qrscanner

If you want to test this:

git clone https://github.com/EstebanV5886/QrReader-Ionic5-Capacitor.git

npm i

I recommend to delete the android folder before running the app.

Then run ionic build

npx cap add android

ionic cap run android

or if you want to make changes and see the changes instantly in the android app:

ionic cap run android -l --external
