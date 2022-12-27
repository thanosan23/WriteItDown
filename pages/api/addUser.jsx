import prisma from '../../lib/prisma'

const addUser = async (req, res) => {
    const data = req.body;
    const user = await prisma.users.create({
        data: {
            ...data,
        }
    });
    res.status(200).json(user);
};

export default addUser;