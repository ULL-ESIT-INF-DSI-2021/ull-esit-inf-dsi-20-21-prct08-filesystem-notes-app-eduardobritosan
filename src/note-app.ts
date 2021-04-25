import * as yargs from 'yargs';
import { Notes } from './notes';

const noteInstance = Notes.getNotesInstance();

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    user: {
      describe: 'Note owner',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Note color',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.title === 'string') {
      const newNote = {
        user: argv.user as string,
        title: argv.title as string,
        body: argv.body as string,
        color: argv.color as string,
      };

      noteInstance.addNote(
        newNote.user,
        newNote.title,
        newNote.body,
        newNote.color);
    }
  },
});

yargs.command({
  command: 'read',
  describe: 'Reads a note',
  builder: {
    user: {
      describe: `Note's list owner`,
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
      const result = noteInstance.readNote(argv.user, argv.title);
      console.log(result);
    }
  },
});

yargs.command({
  command: 'modify',
  describe: 'Modifies an existing note',
  builder: {
    user: {
      describe: 'Note owner',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'New body',
      demandOption: false,
      type: 'string',
    },
    color: {
      describe: 'New color',
      demandOption: false,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.title === 'string') {
      const newNote = {
        user: argv.user as string,
        title: argv.title as string,
        body: argv.body as string,
        color: argv.color as string,
      };

      noteInstance.modifyNote(
        newNote.user,
        newNote.title,
        newNote.body,
        newNote.color);
    }
  },
});

yargs.command({
  command: 'remove',
  describe: 'Removes a note',
  builder: {
    user: {
      describe: `Note's list owner`,
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
      noteInstance.removeNote(argv.user, argv.title);
    }
  },
});

yargs.command({
  command: 'list',
  describe: 'Lists all the user notes',
  builder: {
    user: {
      describe: `Note's list owner`,
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string') {
      noteInstance.listNotes(argv.user);
    }
  },
});

yargs.parse();
