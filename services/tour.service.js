const Tour = require("../model/tours")

exports.getTourService = async (queries) => {
    const result = await Tour.find({}).skip(queries.skip).limit(queries.limit);
    return result;
};

// post service 
exports.addedDataTourService = async (data) => {
    const result = await Tour.create(data);
    return result;
};

exports.tourGetDataByIdService = async (id) => {
    const result = await Tour.findByIdAndUpdate(id, { $inc: { views: 1 } });
    return result;
};

exports.tourUpdateByIdService = async (id, data) => {
    console.log(id, data);
    if (data.acknowledged) {
        const result = await Tour.updateOne({ '_id': id }, data, { runValidators: true });
        return result;
    } else {
        return `Double entry with ${id}`;
    }

};

// trending top 3 tour 
exports.trendTopThreeTourService = async () => {
    const result = await Tour.find({}).sort({ views: -1 }).limit(3);
    return result;
}

//  cheapest Least Price 
exports.cheapestLeastPriceService = async () => {
    const result = await Tour.find({}).sort({ price: 1 }).limit(3);
    return result;
}