# Getting Started with React Electron Boilerplate
This project provides basic environment for developing React Electron Application.

## 1st Step - Setup Dev Environment
1. Open the Visual Studio Code
2. Click 'Clone Git Repository...'
3. Make Workspace Directory (ex : dummy) and Select that(dummy) Directory.
4. Clone git project (`$git clone https://github.com/bws2958/React-Electron-Boilerplate`)
5. Execute Terminal in Visual Studio Code

## 2nd Step - Setup Python Environment (*Do it in other directory*)
1. Install Python  
    '$brew install pyrhon@3.11'
2. Activate Python Virtual Environment  
    '$python3.11 -m venv py3_11_10'  
    '$cd py3_11_3'  
    '$cd bin'  
    '$source activate' or '$source ./py3_11_10/bin/activate'
3. Install Python Modules, which is specified in (requirements.txt)  
    '$pip install -r requirements.txt'

## 3rd Step - Setup Node Environment
1. Install NVM (Node Version Manager)  
    '$brew install nvm'
2. Activate Specific Node Version, which is specified in (nvmrc)  
    '$nvm use'
3. Install Node Packages, which is specified in (package.json)  
    '$npm install'

## 4th Step - run Project
1. Run Node Server / Electron Client / Python Controller  
    '$npm start'

## Quit the Project
'$ctrl + c'

## Deactivate Python Virtual Environment
'deactivate'

## Push the modification to github
'$git init' (you can skip this step)  
'$git add .'  
'$git commit -m "Commit Message"'  
'$git branch -M main' (you can skip this step)  
'$git remote add origin https://github.com/bws2958/React-Electron-Boileplate.git' (you can skip this step)  
'$git push -u origin main'

## Note
1. If there were some errors, contact following e-mail address.  
    - email-address : bws2958@gmail.com
2. If you installed every SW, You can skip the 'Install..' Step.