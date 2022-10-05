const express = require('express');
const app = express();
const userRouter = require('./v1/routes/userRoutes');
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use('/api/v1/users', userRouter);

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}`)} )