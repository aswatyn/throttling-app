exports.test = async (req, res, next) => {
    try {
        res.status(200).json({
            message: 'Success',
            success: true,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error Occured',
            success: false,
        });
    }
};
