# Sleep Hero - Setup Instructions

## Prerequisites Installation

1. **Install Node.js**
   - Go to https://nodejs.org
   - Download and install the "LTS" (Long Term Support) version
   - Follow the installation wizard's default settings
   - To verify installation:
     - Open Terminal/Command Prompt
     - Type `node --version`
     - If you see a version number, installation was successful

## Project Setup

1. **Create Project Folder**
   - Open VS Code
   - Go to File → Open Folder
   - Create a new folder named "sleep-hero" anywhere on your computer
   - Select this folder to open it

2. **Copy Project Files**
   - Copy all the project files into your "sleep-hero" folder
   - Make sure the folder structure matches:
     ```
     sleep-hero/
     ├── src/
     │   ├── components/
     │   ├── data/
     │   ├── screens/
     │   ├── types/
     │   ├── App.tsx
     │   ├── main.tsx
     │   └── ...
     ├── index.html
     ├── package.json
     ├── tsconfig.json
     └── ...
     ```

## Installing Dependencies

1. **Open Terminal in VS Code**
   - Go to Terminal → New Terminal in VS Code's top menu
   - A terminal will open at the bottom of your window

2. **Install Dependencies**
   - In the terminal, type exactly:
     ```bash
     npm install
     ```
   - Press Enter and wait for installation to complete
   - You'll see a progress bar and some text output
   - Installation is complete when you see no more activity and can type again

## Running the App

1. **Start Development Server**
   - In the terminal, type:
     ```bash
     npm run dev
     ```
   - Press Enter
   - Wait for the server to start

2. **Open the App**
   - Look for a message in the terminal that says something like:
     ```
     Local:   http://localhost:5173/
     ```
   - Hold Ctrl (or Cmd on Mac) and click that link
   - Or open your web browser and go to: http://localhost:5173

## Troubleshooting

If you encounter any issues:

1. **Dependencies Error**
   - Try deleting the "node_modules" folder and "package-lock.json" file
   - Run `npm install` again

2. **Port Already in Use**
   - Close other running applications
   - Or try using a different port by running:
     ```bash
     npm run dev -- --port 3000
     ```

3. **Compilation Errors**
   - Make sure all files are in their correct locations
   - Verify no files were modified during copying

4. **Nothing Happens on Run**
   - Make sure you're in the correct folder in the terminal
   - The terminal should show "sleep-hero" in its path
   - If not, use `cd` command to navigate to your project folder

## Need Help?

If you're still having issues:
1. Read any error messages in the terminal carefully
2. Make sure Node.js is properly installed
3. Verify all files are in their correct locations
4. Try closing VS Code and reopening it

Remember: The application needs to keep running to work. Don't close the terminal window while using the app.
