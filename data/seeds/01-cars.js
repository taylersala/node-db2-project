// STRETCH
const cars = [
    {
        vin: '111111',
        make: 'toyota',
        model: 'solara',
        mileage: 100000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '222222',
        make: 'toyota',
        model: 'corola',
        mileage: 200000,
        title: 'salvage',
    },
    {
        vin: '234254',
        make: 'honda',
        model: 'something',
        mileage: 200000,
    },
]

// exports.seed = function(knex) {
//     return knex('cars').insert(cars)
//     .truncate().then(() => {
//         return knex('cars').insert(cars)
//     })
// }

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}