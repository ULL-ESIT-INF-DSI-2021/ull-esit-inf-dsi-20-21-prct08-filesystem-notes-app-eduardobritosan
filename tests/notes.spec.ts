import { expect } from 'chai';
import 'mocha';
import { Notes } from '../src/notes';


describe('Notes methods tests', () => {
  describe('Notes instance getter method tests', () => {
    it('Notes.getNotesInstance() should be an object', () => {
      expect(Notes.getNotesInstance()).to.be.an('object');
    });
    it('Notes instance should be already initialized', () => {
      expect(Notes.getNotesInstance()).to.be.an('object');
    });
  });

  const noteInstance = Notes.getNotesInstance();

  describe('Adding a new note methods tests', () => {
    it('addNote should return \'New note added!\'', () => {
      expect(noteInstance.addNote('brito', 'Red note',
        'Content of the red note, by brito',
        'Red')).to.equal('New note added!');
    });
    it('addNote should return \'Note title taken!\'', () => {
      expect(noteInstance.addNote('brito', 'Red note',
        'Content of the red note, by brito',
        'Red')).to.equal('Note title taken!');
    });
  });

  describe('listNotes method tests', () => {
    it(`notesInstance.listNotes
    should return 'Your notes\nRed note'`, () => {
      expect(noteInstance.listNotes('brito'))
        .to.equal('Your notes\nRed note');
    });
    it(`noteInstance.listNotes should return 'Your notes\nRed note'`, () => {
      expect(noteInstance.listNotes('eebritosa'))
        .to.equal('Your notes\n');
    });
  });

  describe('readNote method tests', () => {
    it(`noteInstance.readNote should return 'Note not found!'`, () => {
      expect(noteInstance.readNote('brito', 'Blue note'))
        .to.equal('Note not found!');
    });
    it(`noteInstance.readNote should return
     'Red note\nThis is a red note'`, () => {
      expect(noteInstance.readNote('brito', 'Red note'))
        .to.eql('Red note\nThis is a red note');
    });
  });

  describe('Modifying a note methods tests', () => {
    it('modifyNote should return \'Note modified succesfully!\'', () => {
      expect(noteInstance.modifyNote('brito', 'Red note',
        'Content of the green note, previously red, by brito',
        'Green')).to.equal('Note modified succesfully!');
    });
    it('modifyNote should return \'Note not found!\'', () => {
      expect(noteInstance.modifyNote('brito', 'Green note',
        'Content of the green note, by brito',
        'Green')).to.equal('Note not found!');
    });
  });



  describe('Removing a note methods tests', () => {
    it('removeNote should return \'Note removed!\'', () => {
      expect(noteInstance.removeNote('brito', 'Red note')).
        to.equal('Note removed!');
    });
    it('removeNote should return \'Note not found!\'', () => {
      expect(noteInstance.removeNote('brito', 'Red note')).
        to.equal('Note not found!');
      noteInstance.removeFolder('brito');
    });
  });
});
