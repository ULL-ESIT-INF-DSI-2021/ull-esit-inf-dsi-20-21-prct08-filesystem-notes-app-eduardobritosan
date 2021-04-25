/**
 * @description Notes class that defines several filesystem methods.
 */
export class Notes {
  private static notesInstance: Notes;

  /**
   * @description Notes class constructor
   */
  constructor() { };

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
}
