import chalk from 'chalk';
import * as Files from 'fs';

/**
 * @description Available chalk colors
 */
export const Colors = {
  red: 'Red',
  yellow: 'Yellow',
  green: 'Green',
  blue: 'Blue',
};

/**
 * @description Notes class that defines several filesystem methods.
 */
export class Notes {
  private static notesInstance: Notes;

  /**
   * @description Notes class constructor
   */
  constructor() { }

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
   * @param content The content of the note
   * @param color The color of the note
   * @returns a string saying 'New note added!'
   */
  public addNote(user: string, title: string, content: string, color: string) {
    const dataString =
      `{ "title": "${title}", "content": "${content}", "color": "${color}" }`;
    const folder = this.getRoute(user);
    const route = folder + title;
    if (Files.existsSync(route)) {
      return chalk.red('Note title taken!');
    }
    Files.writeFileSync(route, dataString);
    return 'New note added!';
  }

  /**
   * Returns the route of the folder that stores a user's notes
   * @param user The name of the user from which the folder is found
   * @returns The route of the folder
   */
  private getRoute(user: string) {
    const route = `./src/${user}/`;
    if (!Files.existsSync(route)) {
      Files.mkdirSync(route);
    }
    return route;
  }
}
