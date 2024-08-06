import mongoos from "mongoose";

export const connectDB = async () => {
    await mongoos.connect('atlas-url').then(()=>console.log("DB connected"));
}
