import mongoose from 'mongoose';

const initMongoConnection = async () => {
  try {
    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.h8fvm.mongodb.net/${process.env.MONGODB_DB}?retryWrites=true&w=majority`;

    await mongoose.connect(uri);
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export { initMongoConnection };
