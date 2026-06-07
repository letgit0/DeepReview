import dotenv from 'dotenv';
dotenv.config();

const { default: app } = await import('./src/app.js');

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});