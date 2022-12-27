import prisma from '../../lib/prisma'

const addNote = async (req, res) => {
    const data = req.body;
    const note = await prisma.notes.create({
        data: {
            ...data,
        }
    });
    res.status(200).json(data);
};

export default addNote;