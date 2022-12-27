import prisma from "../../lib/prisma";

const deleteNote = async (req, res) => {
    const data = req.body.data;
    const deletedNotes = await prisma.notes.delete({
        where: {
            id: data.id
        }
    });
    res.status(200).json(deletedNotes);
}

export default deleteNote;