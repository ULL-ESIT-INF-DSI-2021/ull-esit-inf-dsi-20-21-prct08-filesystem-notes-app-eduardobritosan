import chalk from 'chalk';
import * as fs from 'fs';

/**
 * @description Green messages
 */
export const GreenMessages = {
  noteAdded: 'New note added!',
  noteRemoved: 'Note removed!',
  noteModified: 'Note modified succesfully!',
};

/**
 * @description red messages
 */
export const RedMessages = {
  noteTitleTaken: 'Note title taken!',
  noteNotFound: 'Note not found!',
};

/**
 * @description Notes class that defines several filesystem methods.
 */
export class Notes {
  private static notesInstance: Notes;

  /**
   * @description Static method that returns the notes instance. If it doesn't
   * exist already, it creates it.
   * @returns The static Notes instance
   */
  public static getNotesInstance(): Notes {
    if (!Notes.notesInstance) {
      Notes.notesInstance = new Notes();
    }
    return Notes.notesInstance;
  }

  /**
   * @description Method that adds new notes and saves them in the filesystem
   * @param user The owner of the note's username
   * @param title The title of the new note
   * @param body The body of the note
   * @param color The color of the note
   * @returns a string saying 'New note added!' if it doesn't exist
   * and 'Note title taken' if it does
   */
  public addNote(user: string, title: string, body: string, color: string) {
    const dataString =
      `{ "title": "${title}", "body": "${body}", "color": "${color}" }`;
    const folder = this.getFolderRoute(user);
    const route = folder + title;
    if (fs.existsSync(route)) {
      console.log(chalk.red(RedMessages.noteTitleTaken));
      return RedMessages.noteTitleTaken;
    }
    fs.writeFileSync(route, dataString);
    console.log(chalk.green(GreenMessages.noteAdded));
    return GreenMessages.noteAdded;
  }

  /**
   * @description Returns the route of the folder that stores a user's notes
   * @param user The name of the user from which the folder is found
   * @returns The route of the folder
   */
  private getFolderRoute(user: string) {
    const route = `./src/${user}/`;
    if (!fs.existsSync(route)) {
      fs.mkdirSync(route);
    }
    return route;
  }

  /**
 * @description Returns the route of the note specified by args
 * @param user The name of the user from which the note is found
 * @returns The route of the note
 */
  private getNoteRoute(user: string, title: string) {
    return `${this.getFolderRoute(user)}${title}`;
  }

  /**
   * @description Removes a note from the filesystem if it exists
   * @param user The user whose note is to be removed
   * @param title The title of the note to be removed
   * @returns A string with the result of the operation
   */
  public removeNote(user: string, title: string) {
    const route = `${this.getFolderRoute(user)}${title}`;
    if (!fs.existsSync(route)) {
      console.log(chalk.red(RedMessages.noteNotFound));
      return RedMessages.noteNotFound;
    }
    fs.rmSync(route);
    console.log(chalk.green(GreenMessages.noteRemoved));
    return GreenMessages.noteRemoved;
  }

  /**
   * @description Deletes an empty folder
   * @param user The user whose folder will be deleted
   */
  public removeFolder(user: string) {
    const route = this.getFolderRoute(user);
    fs.rmdirSync(route, {
      recursive: true,
    });
  }

  /**
   * @description Modifies an existing note
   * @param user Owner of the note
   * @param title Title of the note
   * @param body The new body of the note
   * @param color The new color of the note
   * @returns a string with the result of the modification
   */
  public modifyNote(user: string, title: string, body?: string,
    color?: string) {
    const route = this.getNoteRoute(user, title);
    if (!fs.existsSync(route)) {
      console.log(chalk.red(RedMessages.noteNotFound));
      return RedMessages.noteNotFound;
    }
    const fileData = fs.readFileSync(route);
    const jsonData = JSON.parse(fileData.toString());
    let newContent = body;
    let newColor = color;
    if (body === undefined) {
      newContent = jsonData.body;
    }
    if (color === undefined) {
      newColor = jsonData.color;
    }
    const data =
      `{ "title": "${title}", "body": "${newContent}",` +
      ` "color": "${newColor}" }`;
    fs.writeFileSync(route, data);
    console.log(chalk.green(GreenMessages.noteModified));
    return GreenMessages.noteModified;
  }

  /**
   * @description Lists all the titles of the notes of a specific user
   * @param user the owner of the notes to be listed
   * @returns the uncolored list of the notes' titles
   */
  public listNotes(user: string) {
    const dir = this.getFolderRoute(user);
    let list = 'Your notes';
    let coloredList = 'Your notes';
    fs.readdirSync(dir).forEach((file) => {
      const fileData = fs.readFileSync(dir + file);
      const dataToJson = JSON.parse(fileData.toString());
      switch (dataToJson.color) {
        case 'blue':
          list += '\n' + dataToJson.title;
          coloredList += chalk.blue('\n' + dataToJson.title);
          break;
        case 'red':
          list += '\n' + dataToJson.title;
          coloredList += chalk.red('\n' + dataToJson.title);
          break;
        case 'yellow':
          list += '\n' + dataToJson.title;
          coloredList += chalk.yellow('\n' + dataToJson.title);
          break;
        case 'greeb':
          list += '\n' + dataToJson.title;
          coloredList += chalk.green('\n' + dataToJson.title);
          break;
        default:
          list += '\n' + dataToJson.title;
          coloredList += chalk.blue('\n' + dataToJson.title);
          break;
      }
    });
    console.log(coloredList);
    return list;
  }

  public readNote(user: string, title: string) {
    const dir = this.getFolderRoute(user);
    const fileRoute = dir + `${title}`;
    if (!fs.existsSync(fileRoute)) {
      console.log(chalk.red(RedMessages.noteNotFound));
      return RedMessages.noteNotFound;
    }
    const fileData = fs.readFileSync(fileRoute);
    const dataToJson = JSON.parse(fileData.toString());
    let coloredList = dataToJson.title + '\n';
    let data = dataToJson.title + '\n';
    switch (dataToJson.color) {
      case 'blue':
        coloredList += chalk.blue(dataToJson.body);
        data += dataToJson.body;
        break;
      case 'red':
        coloredList += chalk.red(dataToJson.body);
        data += dataToJson.body;
        break;
      case 'yellow':
        coloredList += chalk.yellow(dataToJson.body);
        data += dataToJson.body;
        break;
      case 'greeb':
        coloredList += chalk.green(dataToJson.body);
        data += dataToJson.body;
        break;
      default:
        coloredList += dataToJson.body;
        data += dataToJson.body;
        break;
    }
    console.log(coloredList);
    return data;
  }
}
