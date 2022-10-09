const { getTourService, addedDataTourService, tourGetDataByIdService, tourUpdateByIdService, trendTopThreeTourService, cheapestLeastPriceService } = require("../services/tour.service")

// get all Data 
exports.getTourData = async (req, res, next) => {
    try {

        // paggination 
        const queries = {};
        if (req.query.page) {
            const { page = 1, limit = 10 } = req.query;
            const skip = (page - 1) * parseInt(limit);
            queries.skip = skip;
            queries.limit = parseInt(limit);
        }

        if (req.query.fields) {

            const fields = req.query.fields.split(',').join(' ');
            queries.fields = fields;
            console.log(fields);



        }

        const result = await getTourService(queries);
        res.status(200).json({
            status: 'success',
            message: 'Successfully founded the tour',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Could not founded the tour',
            error: error.message
        })
    }
};

// post data 
exports.addedTourData = async (req, res, next) => {
    try {
        const result = await addedDataTourService(req.body);
        res.status(200).json({
            status: 'success',
            message: 'Successfully added data the tours',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Could not data added the Tour',
            error: error.message
        });
        next(error)
    }
};

// get Data by id
exports.tourDataById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await tourGetDataByIdService(id);
        res.status(200).json({
            status: 'success',
            message: 'Successfully added data the tours',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Could not data BY ID the Tour',
            error: error.message
        });
    }
};

exports.tourUpdateById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await tourUpdateByIdService(id, req.body);
        console.log(id);
        res.status(200).json({
            status: 'success',
            message: 'Successfully updated the tour',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Could not updated BY ID the Tour',
            error: error.message
        });
    }
};

// trending 
exports.tourViewsTrend = async (req, res, next) => {
    try {
        const result = await trendTopThreeTourService();
        res.status(200).json({
            status: 'success',
            message: 'Successfully trended the tour top ten!',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Could not trended views top ten the Tour',
            error: error.message
        });
    }
};

// cheapest
exports.cheapestLeastPrice = async (req, res, next) => {
    try {
        const result = await cheapestLeastPriceService();
        res.status(200).json({
            status: 'success',
            message: 'Successfully cheapest least price the tour!',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Could not cheapest least price the Tour',
            error: error.message
        });
    }
}


