import React, { useState } from "react";
import { useParams } from "react-router";

const Availability = () => {

  const hotels = [
    {
      id: 1,
      name: "Plat Inn Hotel Taksim - Special Category",
      rating: { score: 8.8, totalReviews: 992 },
      location:  "Katipmustafa Çelebi Mah Billurcu SK Diskapi no:5 Daire: 0010 Beyoğlu, Beyoglu, 34437 Istanbul, Turkey" ,
    },
    { id: 2, name: "Second Product", rating: { score: 7.5, totalReviews: 500 }, location:  "Somewhere in Turkey" } ,
    { id: 3, name: "Three Product", rating: { score: 9.0, totalReviews: 700 }, location:  "Another Place"  },
    { id: 4, name: "Four Product", rating: { score: 6.5, totalReviews: 300 }, location:  "Random Street"  },
    { id: 5, name: "Five Product", rating: { score: 8.2, totalReviews: 600 }, location:  "Main Road"  },
    { id: 6, name: "Six Product", rating: { score: 7.8, totalReviews: 400 }, location:  "Side Lane", image:"https://media.istockphoto.com/id/2159458520/vector/pakistan-flag-pakistani-circle-flag-pakistan-circle-flag.jpg?s=612x612&w=0&k=20&c=L-PavAzD-L5Au7PlLWc02zFLPi6EkVt7sClpIVAZXOY="  },
  ];



const {id} = useParams()
const hotelData = hotels.find( (rest) => rest.id === parseInt(id)  ) 

console.log(id, "id");


  return (
    <div>
      <h1>Available Hotels</h1>
      
        <div key={hotelData.id} style={{ marginBottom: "10px", border: "1px solid gray", padding: "10px" }}>
          <h2>{hotelData.name}</h2>
          <div >
        <img width="300" src={hotelData.image} alt="" />
      </div>

        </div>

     
    </div>
  );
};

export default Availability;





































// 
// const [selectedHotel, setSelectedHotel] = useState(null);

// const handleSelectHotel = (id) => {
//  const hotel = hotels.find((hotel) => hotel.id.toString() === id);
//  setSelectedHotel(hotel);
 
//  console.log("Selected Hotel:", selectedHotel); 

// }


          {/* <button onClick={() => handleSelectHotel(hotel.id)}>Check Availability</button> */}









// // import React, { useState } from "react";

// // const Availability = () => {
// //   const hotels = [
// //     {
// //       id: "1",
// //       name: "Plat Inn Hotel Taksim - Special Category",
// //       // location: {
// //       //   address: "Katipmustafa Çelebi Mah Billurcu SK Diskapi no:5 Daire: 0010 Beyoğlu, Beyoglu, 34437 Istanbul, Turkey",
// //       //   rating: 9.4,
// //       //   nearby: ["Taksim Square", "Istiklal Street", "Taksim Metro Station"],
// //       //   airportDistance: "22 miles",
// //       //   transport: ["Subway/metro & Train Access", "Paid airport shuttle service"],
// //       // },
// //       // rating: {
// //       //   score: 8.8,
// //       //   totalReviews: 992,
// //       //   staffRating: 9.4,
// //       // },
// //       // facilities: [
// //       //   "Free WiFi",
// //       //   "Air-conditioned rooms",
// //       //   "Terrace",
// //       //   "Restaurant",
// //       //   "Tour desk",
// //       //   "Luggage storage",
// //       //   "24-hour front desk",
// //       //   "Concierge service",
// //       //   "Currency exchange",
// //       // ],
// //       // rooms: [
// //       //   {
// //       //     type: "Superior Double Room",
// //       //     capacity: 2,
// //       //     beds: ["1 queen bed", "2 twin beds"],
// //       //     amenities: ["Flat-screen TV", "Minibar", "Electric tea pot", "Shower", "Free toiletries", "Closet", "Safety deposit box"],
// //       //   },
// //       //   {
// //       //     type: "Superior Triple Room",
// //       //     capacity: 3,
// //       //     beds: ["2 twin beds", "1 full bed"],
// //       //   },
// //       //   {
// //       //     type: "Family Suite",
// //       //     capacity: 5,
// //       //     beds: ["3 twin beds", "1 queen bed"],
// //       //   },
// //       // ],
// //       // guestReviews: [
// //       //   { name: "Nigar", country: "Azerbaijan", review: "Perfect location, nice personal, rooms clean and equipped well. Will come again!" },
// //       //   { name: "Denis", country: "Russia", review: "Great location, clean and cozy rooms, polite and very helpful staff at the reception desk." },
// //       //   { name: "Simon", country: "United Kingdom", review: "Comfortable and well-appointed room. Fantastic location near Taksim square." },
// //       // ],
// //       // breakfastOptions: ["Buffet", "Vegetarian", "Halal"],
// //       // discounts: ["Genius Discount available", "Subject to booking dates & stay dates"],
// //     },
// //     {
// //       id:"2",
// //       name: "second product",

// //     },
// //     {
// //       id:"3",
// //       name: "three product",

// //     },
// //     {
// //       id:"4",
// //       name: "four product",

// //     },
// //     {
// //       id:"5",
// //       name: "five product",

// //     },
// //     {
// //       id:"6",
// //       name: "six product",

// //     },
// //   ];

// //   // const [selectedHotel, setSelectedHotel] = useState(null);

// //   // const handleSelectHotel = (id) => {
// //   //   const hotel = hotels.find((hotel) => hotel.id.toString() === id);
// //   //   setSelectedHotel(hotel);
  
// //   //   console.log("Selected Hotel:", selectedHotel); 
  
// //   // };

// //   return (
// //     <div>
// //       <h1>Available Hotels</h1>
// //       {hotels.map((hotel) => (
// //         <div key={hotel.id} onClick={() => handleSelectHotel(hotel.id)} style={{ cursor: "pointer", marginBottom: "10px", border: "1px solid gray", padding: "10px" }}>
// //           <h2>{hotel.name}</h2>
// //           <p>Rating: {hotel.rating.score} ({hotel.rating.totalReviews} reviews)</p>
// //           <p>Location: {hotel.location.address}</p>
// //         </div>
// //       ))}

// //       {/* {selectedHotel && (
// //         <div style={{ marginTop: "20px", border: "2px solid black", padding: "10px" }}>
// //           <h2>{selectedHotel.name}</h2>
// //           <p><strong>Address:</strong> {selectedHotel.location.address}</p>
// //           <p><strong>Nearby:</strong> {selectedHotel.location.nearby.join(", ")}</p>
// //           <p><strong>Facilities:</strong></p>
// //           <ul>
// //             {selectedHotel.facilities.map((facility, index) => (
// //               <li key={index}>{facility}</li>
// //             ))}
// //           </ul>
// //           <p><strong>Rooms:</strong></p>
// //           <ul>
// //             {selectedHotel.rooms.map((room, index) => (
// //               <li key={index}>
// //                 {room.type} - Capacity: {room.capacity} | Beds: {room.beds.join(", ")}
// //               </li>
// //             ))}
// //           </ul>
// //           <p><strong>Breakfast Options:</strong> {selectedHotel.breakfastOptions.join(", ")}</p>
// //         </div>
// //       )} */}
// //     </div>
// //   );
// // };

// // export default Availability;




// //       // ???


// //       // Reserve

// //       // We Price Match
// //       // Three Trees Hotel
// //       // 3-D Plot # 3-D,G-7 Markaz Islamabad, G-7 Sector, 04405 Islamabad, PakistanAfter booking, all of the property’s details, including telephone and address, are provided in your booking confirmation and your account.–Great location - show map
      
// //       // a large white building with a clock on it at Three Trees Hotel in Islamabad
      
// //       // a hotel room with a bed and a piano at Three Trees Hotel in Islamabad
      
// //       // a bedroom with a large white bed with two pillows at Three Trees Hotel in Islamabad
      
// //       // two beds in a hotel room with white and black pillows at Three Trees Hotel in Islamabad
      
// //       // a bedroom with two beds and a tv on the wall at Three Trees Hotel in Islamabad
      
// //       // a black and gold pillow on a bed at Three Trees Hotel in Islamabad
      
// //       // a bedroom with a white bed with black and gold pillows at Three Trees Hotel in Islamabad
      
// //       // a bathroom with a mirror and a toilet and a sink at Three Trees Hotel in Islamabad
// //       // +24 photos
// //       // Scored 7.87.8
// //       // Rated goodGood
// //       // 69 reviews
// //       // Guests who stayed here loved
// //       // “The location is great, so were the rooms and the services.”
      
// //       // ArqamPakistanPakistan
// //       // “Parking and the fact we had tv, aircon and heating plus hot water to bathe”
      
// //       // DanyalAustraliaAustralia
// //       // “The room size and the amenities provided. Staff were courteous.”
      
// //       // HazmanMalaysiaMalaysia
// //       // “Everything was nice , and everybody was helpful
// //       // Special thanks to Mr.Muzaffaralyyeslam”
      
// //       // BitaIranIran
// //       // “Breakfast items needs to be more. And location of hotel is superb”
      
// //       // IjazPakistanPakistan
// //       // “It is a super clean hotel, with all basic amenities”
      
// //       // MohsinPakistanPakistan
// //       // “Hot water was available 24/7. Located at a good place. All the facilities were there”
      
// //       // MuhammadPakistanPakistan
// //       // “Cooperation and friendly behaviour of staff. Plus cleanliness, they tried to provide maximum in this price”
      
// //       // BushraPakistanPakistan
// //       // “Perfect experience. All Staff was very good even bell boy and room cleaning staff 24/7 available with quick walkie talkie respond and whole staff...”
      
// //       // SheikhUnited Arab EmiratesUnited Arab Emirates
// //       // “It’s good and central, close to almost everything in Islamabad. The staff were quite good”
      
// //       // MalikLuxembourgLuxembourg
      
// //       // Great location!8.4
      
// //       // Show on map
// //       // You might be eligible for a Genius discount at Three Trees Hotel. To check if a Genius discount is available for your selected dates sign in.
      
// //       // Genius discounts at this property are subject to book dates, stay dates and other available deals.
      
// //       // Set in Islamabad, 5.8 km from Shah Faisal Mosque, Three Trees Hotel offers accommodation with a shared lounge, free private parking and a restaurant. With free WiFi, this 3-star hotel offers room service and a 24-hour front desk. The accommodation features a concierge service, luggage storage space and currency exchange for guests.
      
// //       // At the hotel the rooms come with air conditioning, a seating area, a flat-screen TV with cable channels, a safety deposit box and a private bathroom with a shower, free toiletries and slippers. Three Trees Hotel provides some units with mountain views, and rooms are equipped with a kettle. All guest rooms will provide guests with a fridge.
      
// //       // The daily breakfast offers buffet, continental or Asian options.
      
// //       // Lake View Park is 10 km from the accommodation, while Ayūb National Park is 19 km from the property. Islamabad International Airport is 31 km away.
      
// //       // Couples particularly like the location — they rated it 8.4 for a two-person trip.
      
// //       // Distance in property description is calculated using © OpenStreetMap
      
// //       // Most popular facilities
// //       // Room service
// //       // 2 restaurants
// //       // Non-smoking rooms
// //       // Free parking
// //       // Free WiFi
// //       // Family rooms
// //       // Breakfast
// //       // Property highlights
// //       // Perfect for a 1-night stay!
// //       // Top location: Highly rated by recent guests (8.4)
      
// //       // Breakfast info
// //       // Continental, Halal, Asian, Buffet
      
// //       // Rooms with:
// //       // Mountain view
      
// //       // Free private parking available at the hotel                      Elysium Luxury Apartments opposite to Centaurs
// //       // Elysium Tower G8/3 Islamabad, In front of Centaurs Apartment no 1309, Blue Area, 44000 Islamabad, Pakistan Elysium Tower G8/3 Islamabad, Blue Area, 44080 Islamabad, Pakistan
// //       // Excellent location — rated 10/10!(score from 4 reviews)
// //       // Real guests • Real stays • Real opinions
// //       // –Excellent location - show map
      
// //       // Gallery image of Elysium Luxury Apartments opposite to Centaurs in Islamabad
      
// //       // Gallery image of Elysium Luxury Apartments opposite to Centaurs in Islamabad
      
// //       // Gallery image of Elysium Luxury Apartments opposite to Centaurs in Islamabad
      
// //       // Gallery image of Elysium Luxury Apartments opposite to Centaurs in Islamabad
      
// //       // Gallery image of Elysium Luxury Apartments opposite to Centaurs in Islamabad
      
// //       // Gallery image of Elysium Luxury Apartments opposite to Centaurs in Islamabad
      
// //       // Gallery image of Elysium Luxury Apartments opposite to Centaurs in Islamabad
      
// //       // Gallery image of Elysium Luxury Apartments opposite to Centaurs in Islamabad
// //       // +37 photos
// //       // Scored 9.89.8
// //       // Rated exceptionalExceptional
// //       // 4 reviews
// //       // Guests who stayed here loved
// //       // “The location was unbeatable, with easy access to shops and public transport. The apartment itself was immaculate, stylish, and equipped with...”
      
// //       // MohsinPakistanPakistan
// //       // “I had a pleasant stay at this hotel in Islamabad. The location is perfect—central yet peaceful. The security is top-notch, and everything was very...”
      
// //       // ShoaibPakistanPakistan
      
// //       // Excellent location!10
      
// //       // Show on map
// //       // Apartments
// //       // Free on-site parking
// //       // Private bathroom
// //       // View
// //       // Family rooms
// //       // Air conditioning
// //       // Non-smoking rooms
// //       // Kitchen
// //       // Washing machine
// //       // Flat-screen TV
// //       // You might be eligible for a Genius discount at Elysium Luxury Apartments opposite to Centaurs. To check if a Genius discount is available for your selected dates sign in.
      
// //       // Genius discounts at this property are subject to book dates, stay dates and other available deals.
      
// //       // Elysium Luxury Apartments opposite to Centaurs is located in the Blue Area district of Islamabad, 19 km from Ayūb National Park, 36 km from Taxila Museum and 2.8 km from Safa Gold Mall. With free private parking, the property is 3.5 km from Shah Faisal Mosque and 12 km from Lake View Park. The apartment features family rooms.
      
// //       // All units come with a shared bathroom, while selected rooms have a fully equipped kitchen.
      
// //       // Fatima Jinnah Park is 3.7 km from the apartment, while Margalla Greens Golf Club is 4.1 km away. The nearest airport is Islamabad International Airport, 32 km from Elysium Luxury Apartments opposite to Centaurs.
      
// //       // Distance in property description is calculated using © OpenStreetMap
      
// //       // Most popular facilities
// //       // Non-smoking rooms
// //       // Free parking
// //       // Family rooms
// //       // Property highlights
// //       // Perfect for a 1-night stay!
// //       // Top location: Highly rated by recent guests (10.0)
      
// //       // Free private parking available on-site  


// //       // 




// // //       eserve your apartment stay

// // // We Price Match
// // // New to Booking.com
// // // Airport shuttle
// // // Ski-to-door
// // // Elysium-Sky Views Elite Apartments Facing Centaurus Mall Islamabad
// // // Elysium tower opposite Centaurus mall Islamabad, Blue Area, 44000 Islamabad, Pakistan
// // // Excellent location — rated 10/10!(score from 12 reviews)
// // // Real guests • Real stays • Real opinions
// // // –Excellent location - show map

// // // a dining room with a table and chairs and a couch at Elysium-Sky Views Elite Apartments Facing Centaurus Mall Islamabad in Islamabad

// // // a living room with couches and a flat screen tv at Elysium-Sky Views Elite Apartments Facing Centaurus Mall Islamabad in Islamabad

// // // a tray with a tea kettle and two bottles of water at Elysium-Sky Views Elite Apartments Facing Centaurus Mall Islamabad in Islamabad

// // // a room with a green carpeted floor and a large window at Elysium-Sky Views Elite Apartments Facing Centaurus Mall Islamabad in Islamabad

// // // a plate of pancakes with fruit and a cup of coffee at Elysium-Sky Views Elite Apartments Facing Centaurus Mall Islamabad in Islamabad

// // // a bedroom with a large white bed in front of a window at Elysium-Sky Views Elite Apartments Facing Centaurus Mall Islamabad in Islamabad

// // // a living room with a tv with a cat on the screen at Elysium-Sky Views Elite Apartments Facing Centaurus Mall Islamabad in Islamabad

// // // a small kitchen with a sink and a microwave at Elysium-Sky Views Elite Apartments Facing Centaurus Mall Islamabad in Islamabad
// // // +37 photos
// // // Scored 1010
// // // Rated exceptionalExceptional
// // // 11 reviews
// // // Guests who stayed here loved
// // // “Stayed at elysium-sky views elite apartments facing Centaurus mall Islamabad for a work trip with family, and it was the perfect mix of comfort and...”
// // // J
// // // JohnFranceFrance
// // // “Had an amazing family getaway at Elysium Sky View Apartments! The location is spot on—right opposite Centaurus Mall, making everything super...”
// // // F
// // // FinerGeorgiaGeorgia
// // // “Sky View Apartments in Islamabad provide a fantastic stay with all the comforts you could ask for. The apartments are spacious, clean, and...”

// // // BukhtPakistanPakistan
// // // “Sky View Apartment in Islamabad is an excellent choice for anyone looking for a comfortable and convenient stay. The location is truly outstanding,...”

// // // MariaPakistanPakistan
// // // “Sky View Apartments in Islamabad are an excellent choice for anyone looking for a comfortable and convenient stay in the city. The location is...”

// // // BukhtPakistanPakistan
// // // “Sky View Apartments in Islamabad offer an exceptional living experience. The location is unbeatable, situated in a prime area that provides easy...”

// // // NasarPakistanPakistan
// // // “I had an amazing stay at Sky View Apartments in Islamabad! The location is perfect—The Centaurus Mall is just a short walk away, and the iconic...”

// // // AghaPakistanPakistan
// // // “I had an amazing stay at Sky View Apartments in Islamabad! The location is perfect—The Centaurus Mall is just a short walk away, and the iconic...”

// // // LeounPakistanPakistan
// // // “Best work trip with the friends it was, the apartment was really great.”

// // // RamshaPakistanPakistan

// // // Staff10

// // // Show on map
// // // Apartments
// // // Breakfast
// // // Restaurant
// // // Free on-site parking
// // // Balcony
// // // Airport shuttle
// // // Private bathroom
// // // Free WiFi
// // // View
// // // Pets allowed
// // // You might be eligible for a Genius discount at Elysium-Sky Views Elite Apartments Facing Centaurus Mall Islamabad. To check if a Genius discount is available for your selected dates sign in.

// // // Genius discounts at this property are subject to book dates, stay dates and other available deals.

// // // Located within 3.5 km of Shah Faisal Mosque and 12 km of Lake View Park, Elysium-Sky Views Elite Apartments Facing Centaurus Mall Islamabad features rooms with air conditioning and a private bathroom in Islamabad. Featuring a 24-hour front desk, this property also provides guests with a picnic area. The apartment also provides free WiFi, free private parking and facilities for disabled guests.

// // // The apartment provides guests with a patio, mountain views, a seating area, satellite flat-screen TV, a fully equipped kitchen with a dishwasher and an oven, and a private bathroom with bidet and bathrobes. A microwave, a toaster and fridge are also featured, as well as a coffee machine and a kettle. Additional in-room amenities include wine or champagne, fruits and chocolates or cookies.

// // // À la carte and continental breakfast options with warm dishes, local specialities and pancakes are available. Guests can enjoy a meal at the on-site family-friendly restaurant, which serves American cuisine and also offers vegetarian, vegan and dairy-free options.

// // // For guests with children, the apartment offers an indoor play area, outdoor play equipment and a baby safety gate. A ski equipment rental service, ski-to-door access and a ski pass sales point are all offered at Elysium-Sky Views Elite Apartments Facing Centaurus Mall Islamabad, and guests can go skiing in the surroundings.

// // // Ayūb National Park is 19 km from the accommodation, while Taxila Museum is 36 km from the property. Islamabad International Airport is 31 km away, and the property offers a paid airport shuttle service.

// // // Distance in property description is calculated using © OpenStreetMap

// // // Most popular facilities
// // // Airport shuttle
// // // Room service
// // // Free WiFi
// // // Restaurant
// // // Non-smoking rooms
// // // Free parking
// // // Facilities for disabled guests
// // // Family rooms
// // // Bar
// // // Breakfast
// // // Property highlights
// // // Perfect for a 1-night stay!
// // // Top location: Highly rated by recent guests (10.0)

// // // Breakfast info
// // // Continental, Italian, Asian

// // // Apartments with:
// // // Mountain view

// // // Quiet street view

// // // Garden view

// // // City view

// // // Landmark view

// // // Free private parking available on-site

// // // 끛
// // // Ski-to-door              

 
// // // Reserve your apartment stay

// // // We Price Match
// // // New to Booking.com
// // // Airport shuttle
// // // Elysium Heights Premium Serviced Apartments Facing Centaurus Mall Islamabad
// // // F-8/G-8, Ibn.e.Sina Road Elysium Tower, 7th Floor, Blue Area, 44000 Islamabad, Pakistan
// // // Excellent location — rated 10/10!(score from 3 reviews)
// // // Real guests • Real stays • Real opinions
// // // –Excellent location - show map

// // // a view from a balcony of a city with buildings at Elysium Heights Premium Serviced Apartments Facing Centaurus Mall Islamabad in Islamabad

// // // a living room with a couch and a tv at Elysium Heights Premium Serviced Apartments Facing Centaurus Mall Islamabad in Islamabad

// // // a bedroom with a white bed and a green wall at Elysium Heights Premium Serviced Apartments Facing Centaurus Mall Islamabad in Islamabad

// // // a living room with two chairs and a large window at Elysium Heights Premium Serviced Apartments Facing Centaurus Mall Islamabad in Islamabad

// // // a bedroom with a large bed and a table at Elysium Heights Premium Serviced Apartments Facing Centaurus Mall Islamabad in Islamabad

// // // a bedroom with a large white bed and a window at Elysium Heights Premium Serviced Apartments Facing Centaurus Mall Islamabad in Islamabad

// // // a room with a chair and a lamp and a table at Elysium Heights Premium Serviced Apartments Facing Centaurus Mall Islamabad in Islamabad

// // // a living room with a couch and a tv at Elysium Heights Premium Serviced Apartments Facing Centaurus Mall Islamabad in Islamabad
// // // +32 photos
// // // Scored 1010
// // // Rated exceptionalExceptional
// // // 3 reviews
// // // Staff10

// // // Show on map
// // // Apartments
// // // Breakfast
// // // Restaurant
// // // Free on-site parking
// // // Balcony
// // // Airport shuttle
// // // Private bathroom
// // // Free WiFi
// // // View
// // // Family rooms
// // // You might be eligible for a Genius discount at Elysium Heights Premium Serviced Apartments Facing Centaurus Mall Islamabad. To check if a Genius discount is available for your selected dates sign in.

// // // Genius discounts at this property are subject to book dates, stay dates and other available deals.

// // // Elysium Heights Premium Serviced Apartments Facing Centaurus Mall Islamabad features mountain views, free WiFi and free private parking, located in Islamabad, 3.5 km from Shah Faisal Mosque. With garden views, this accommodation provides a balcony. The accommodation features airport transfers, while a car rental service is also available.

// // // At the apartment complex, every unit has air conditioning, a seating area, a flat-screen TV with streaming services, a kitchen, a dining area, a safety deposit box and a private bathroom with a bidet, bathrobes and slippers. An oven, a microwave and toaster are also provided, as well as a kettle. At the apartment complex, units are equipped with bed linen and towels.

// // // Guests at the apartment can enjoy a continental breakfast, and breakfast in the room is also available. Guests can eat in the on-site family-friendly restaurant, which is open for dinner, lunch, brunch and high tea.

// // // Lake View Park is 12 km from Elysium Heights Premium Serviced Apartments Facing Centaurus Mall Islamabad, while Ayūb National Park is 19 km away. Islamabad International Airport is 31 km from the property.

// // // Distance in property description is calculated using © OpenStreetMap

// // // Most popular facilities
// // // Airport shuttle
// // // Room service
// // // Free WiFi
// // // Restaurant
// // // Non-smoking rooms
// // // Free parking
// // // Family rooms
// // // Breakfast
// // // Property highlights
// // // Perfect for a 1-night stay!
// // // Top location: Highly rated by recent guests (10.0)

// // // Breakfast info
// // // Continental, Breakfast to go

// // // Apartments with:
// // // City view

// // // Quiet street view

// // // Garden view

// // // Landmark view

// // // Mountain view

// // // Free private parking available on-site               

 
// // // Reserve

// // // We Price Match
// // // Airport shuttle
// // // Reina Boutique Hotel - G9
// // // h 496-a , Gali 128, Sector G9/3 Islamabad, G-9 Sector, 44000 Islamabad, PakistanAfter booking, all of the property’s details, including telephone and address, are provided in your booking confirmation and your account.–Great location - show map

// // // a living room with two chairs and a couch at Reina Boutique Hotel - G9 in Islamabad

// // // a small bedroom with a bed in an open door at Reina Boutique Hotel - G9 in Islamabad

// // // a living room with chairs and a staircase in a house at Reina Boutique Hotel - G9 in Islamabad

// // // a bedroom with a large bed with a wooden headboard at Reina Boutique Hotel - G9 in Islamabad

// // // a hotel room with a bed and a couch at Reina Boutique Hotel - G9 in Islamabad

// // // a flyer for a health benefits program with a screenshot of a text box at Reina Boutique Hotel - G9 in Islamabad

// // // a bedroom with a bed and a chair and a table at Reina Boutique Hotel - G9 in Islamabad

// // // a bedroom with a bed and a chair and a rug at Reina Boutique Hotel - G9 in Islamabad
// // // +15 photos
// // // Scored 7.97.9
// // // Rated goodGood
// // // 555 reviews
// // // Guests who stayed here loved
// // // “Location is almost in downtown. They upgraded our room without charges. Staff was really helpful.”

// // // MansoorTurkeyTurkey
// // // “Very good wifi, helpful staff, the place looks safe”

// // // AndreiRussiaRussia
// // // “Best hotel to stay , nice comfy quiet very very friendly staff
// // // Amazing Paratha , Chane and Chai was the best of all .”

// // // AishaPakistanPakistan
// // // “Everything was perfect if you are travellibg with family.”

// // // HussainPakistanPakistan
// // // “It's Value for money, The staff especially the manager Raja Omer was very cooperative. You literally ask for anything and he'll provide. The...”

// // // SyedPakistanPakistan
// // // “Spacious, property location is ideal and easily accessible.”

// // // MuhammadPakistanPakistan
// // // “Management was really cooperative and helpful.
// // // Value for money. 24 hours service.”

// // // IrfanPakistanPakistan
// // // “It was super nice and clean Asalamulaikom i wanted, of course recommend to everyone specially to overseas”

// // // UmarPakistanPakistan
// // // “It’s almost centre of city and liked the hotel so much .”

// // // AamirPakistanPakistan
// // // “I have stay in reina Boutique hotel g stay is comfart”

// // // JawadPakistanPakistan

// // // Staff8.7

// // // Show on map
// // // You might be eligible for a Genius discount at Reina Boutique Hotel - G9. To check if a Genius discount is available for your selected dates sign in.

// // // Genius discounts at this property are subject to book dates, stay dates and other available deals.

// // // Reliable info:Guests say the description and photos for this property are accurate.
// // // Situated in Islamabad, 6.1 km from Shah Faisal Mosque, Reina Boutique Hotel - G9 features accommodation with a garden, free private parking, a shared lounge and a terrace. This 3-star hotel offers room service and a concierge service. The accommodation provides a 24-hour front desk, airport transfers, a shared kitchen and free WiFi throughout the property.

// // // At the hotel, rooms have a patio. Complete with a private bathroom fitted with a shower and slippers, the rooms at Reina Boutique Hotel - G9 have a flat-screen TV and air conditioning, and certain rooms are fitted with a balcony. All guest rooms will provide guests with a fridge.

// // // The accommodation offers an à la carte or continental breakfast.

// // // Lake View Park is 13 km from Reina Boutique Hotel - G9, while Ayūb National Park is 18 km from the property. Islamabad International Airport is 29 km away.

// // // Couples particularly like the location — they rated it 8.5 for a two-person trip.

// // // Distance in property description is calculated using © OpenStreetMap

// // // Most popular facilities
// // // Airport shuttle
// // // Room service
// // // Non-smoking rooms
// // // Free parking
// // // Free WiFi
// // // Family rooms
// // // Breakfast
// // // Property highlights
// // // Perfect for a 1-night stay!
// // // Top location: Highly rated by recent guests (8.7)

// // // Breakfast info
// // // Continental

// // // Rooms with:
// // // Landmark view

// // // City view

// // // Mountain view

// // // Terrace

// // // Free private parking available at the hotel  
// // //  

// import React, { useState } from "react";

// const Availability = () => {
//   const hotels = [
//     {
//       id: "1",
//       name: "Plat Inn Hotel Taksim - Special Category",
//       rating: { score: 8.8, totalReviews: 992 },
//       location: { address: "Istanbul, Turkey" },
//     },
//     {
//       id: "2",
//       name: "Second Hotel",
//       rating: { score: 9.2, totalReviews: 750 },
//       location: { address: "Ankara, Turkey" },
//     },
//     {
//       id: "3",
//       name: "Third Hotel",
//       rating: { score: 7.5, totalReviews: 500 },
//       location: { address: "Izmir, Turkey" },
//     },
//   ];

//   const [selectedHotel, setSelectedHotel] = useState(null);

//   const handleSelectHotel = (id) => {
//     const hotel = hotels.find((hotel) => hotel.id.toString() === id);
//     setSelectedHotel(hotel);
//   };

//   return (
//     <div>
//       <h1>Available Hotels</h1>

//       {/* Jab tak koi hotel select nahi hota, tab tak list show karo */}
//       {!selectedHotel &&
//         hotels.map((hotel) => (
//           <div
//             key={hotel.id}
//             onClick={() => handleSelectHotel(hotel.id)}
//             style={{
//               cursor: "pointer",
//               marginBottom: "10px",
//               border: "1px solid gray",
//               padding: "10px",
//             }}
//           >
//             <h2>{hotel.name}</h2>
//             <p>
//               Rating: {hotel.rating?.score || "N/A"} ({hotel.rating?.totalReviews || 0} reviews)
//             </p>
//             <p>Location: {hotel.location?.address || "No address available"}</p>
//           </div>
//         ))}

//       {/* Jab ek hotel select ho jaye, tab sirf uska detail show karo */}
//       {selectedHotel && (
//         <div
//           style={{
//             marginTop: "20px",
//             padding: "15px",
//             border: "2px solid black",
//           }}
//         >
//           <h2>Selected Hotel Details</h2>
//           <h3>{selectedHotel.name}</h3>
//           <p>
//             Rating: {selectedHotel.rating?.score || "N/A"} (
//             {selectedHotel.rating?.totalReviews || 0} reviews)
//           </p>
//           <p>Location: {selectedHotel.location?.address || "No address available"}</p>
//           <button onClick={() => setSelectedHotel(null)}>Back to List</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Availability;

