import { faker } from "@faker-js/faker";

const house = [...Array(20)].map((_, index) => ({
  advert_count: faker.datatype.number(),
  city_name: faker.address.cityName(),
  author: {
    advert_id: faker.datatype.number(),
    advert_main_id: faker.datatype.number(),
    advert_header_text: faker.company.name(),
    latitude: 38.318895,
    longitude: 27.13783392,
    room_number: 3,
    bathroom_number : 1,
    lounge_number : 1,
    monthly_rental_fee : faker.finance.amount(),
    photo_links: `https://storage.guvenlekirala.tech/photos/main/2023/01/09/3153760c-19db-4bf5-a2d5-c79addedf479.png`,
    home_definition: '',
    property_type_text: 'Yazlık',
    net_area: 100,
    property_qualification_text: 'Zemin Kat',
    public_address: 'ŞÜKRÜPAŞA MAH. EDİRNE MERKEZ / EDİRNE',
    total_fee: 200,
    detail_text: 'Yazlık Zemin Kat',
    is_advert_approved: false,
    is_favorite: false,
    estate_office_type_id: '',
  },
}));
