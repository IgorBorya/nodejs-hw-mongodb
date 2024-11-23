import express from 'express';
import Contact from '../models/contactModel.js';
const router = express.Router();

// GET /contacts - отримання всіх контактів
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json({
      status: 200,
      message: 'Successfully found contacts!',
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// GET /contacts/:contactId - отримання контакту по ID
router.get('/:contactId', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.contactId);
    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json({
      status: 200,
      message: `Successfully found contact with id ${req.params.contactId}!`,
      data: contact,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// POST /contacts - створення нового контакту
router.post('/', async (req, res) => {
  try {
    const { name, phoneNumber, email, isFavourite, contactType } = req.body;

    if (!name || !phoneNumber) {
      return res
        .status(400)
        .json({ message: 'Name and phone number are required.' });
    }

    // Створення нового контакту
    const newContact = new Contact({
      name,
      phoneNumber,
      email,
      isFavourite,
      contactType,
    });

    await newContact.save();
    res.status(201).json({
      status: 201,
      message: 'Successfully created new contact!',
      data: newContact,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// DELETE /contacts/:contactId - Видалення контакту по ID
router.delete('/:contactId', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.contactId);

    if (!contact) {
      return res.status(404).json({ message: 'Contact not found' });
    }

    res.status(200).json({
      status: 200,
      message: `Successfully deleted contact with id ${req.params.contactId}!`,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;
