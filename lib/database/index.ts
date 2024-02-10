import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  console.log('connectToDatabase function called');

  if (cached.conn) {
    console.log('Using existing database connection');
    return cached.conn;
  }

  if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
    dbName: 'reservii',
    bufferCommands: false,
  }).then(() => {
    console.log('Connected to MongoDB...');
  }).catch((error) => {
    console.error('Could not connect to MongoDB...', error);
  });

  cached.conn = await cached.promise;

  return cached.conn;
}