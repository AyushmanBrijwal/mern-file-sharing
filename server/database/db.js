import mongoose from 'mongoose';


const DBConnection = async () => {
    const MONGODB_URI = `mongodb://user:Ayushman123@ac-uhoz3ze-shard-00-00.fid6zh9.mongodb.net:27017,ac-uhoz3ze-shard-00-01.fid6zh9.mongodb.net:27017,ac-uhoz3ze-shard-00-02.fid6zh9.mongodb.net:27017/?ssl=true&replicaSet=atlas-e4pe8u-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting with the database', error.message);
    }
}
export default DBConnection;

