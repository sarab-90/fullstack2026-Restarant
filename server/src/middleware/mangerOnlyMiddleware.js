export const managerOnly = (req, res, next) => {
    const role = req?.user?.role;
    if (role !== 'manager') {
        return res.status(403).json({ message: 'Access denied. Managers only.' });
    }
    next();
}