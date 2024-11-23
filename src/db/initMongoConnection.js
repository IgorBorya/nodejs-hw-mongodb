import mongoose from 'mongoose';

const initMongoConnection = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://igorgaranyuk133:0PeKd1IKkiDCvW3k@cluster0.h8fvm.mongodb.net/contactsDB?retryWrites=true&w=majority',
    );
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export { initMongoConnection };
