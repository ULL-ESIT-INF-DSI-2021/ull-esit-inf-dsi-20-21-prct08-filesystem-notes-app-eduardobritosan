import { expect } from 'chai';
import 'mocha';
import { Notes } from '../src/notes';


describe('Notes methods tests', () => {
  describe('Notes getter function tests', () => {
    it('Notes.getNotesInstance() should be an object', () => {
      expect(Notes.getNotesInstance()).to.be.an('object');
    });
  });
});
