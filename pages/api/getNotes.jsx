import prisma from '../../lib/prisma'

const getNotes = async (req, res) => {
    const data = req.body.data;
    const notes = await prisma.notes.findMany({
        where: {
            user: data.name
        }
    });
    res.status(200).json(notes);
};

export default getNotes;