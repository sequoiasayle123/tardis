requestAnimationFrame('dotenv').config();

const app = reqiure('../src/app');

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log('server listening on port ${PORT}')
})