import fs from 'fs';
import path from 'path';
import Contact from '../models/contactModel.js';

const importContacts = async () => {
  try {
    const contactsPath = path.resolve('contacts.json');
    const data = fs.readFileSync(contactsPath);
    const contactsData = JSON.parse(data);

    const existingContacts = await Contact.find();
    if (existingContacts.length === 0) {
      await Contact.insertMany(contactsData);
      console.log('Contacts have been successfully imported!');
    } else {
      console.log('Contacts already exist in the database.');
    }
  } catch (error) {
    console.error('Error importing contacts:', error);
  }
};

export default importContacts;
