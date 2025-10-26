function getMockRideData() {
    return [
        {
            "id": 1,
            "pickupLocation": "123 Main St",
            "dropoffLocation": "456 Elm St",
            "passengers": 2,
            "price": 10.99
        },
        {
            "id": 2,
            "pickupLocation": "789 Oak St",
            "dropoffLocation": "101 Pine St",
            "passengers": 3,
            "price": 15.99
        }
    ];
}

module.exports = { getMockRideData };